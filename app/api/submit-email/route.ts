import { NextResponse } from 'next/server';
import * as yup from 'yup';
import { MongoClient } from "mongodb";
import { EmailClient, EmailMessage } from '@azure/communication-email';
import '../../../envConfig.ts';

interface EmailSignUp {
  email: string;
}

// Define the validation schema
const emailSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const uri = process.env.MONGODB_CONNECTION_STRING!;
const client = new MongoClient(uri);

const database = client.db('email-submissions');
const signUps = database.collection<EmailSignUp>('sign-ups');

// Initialize Email Client
const emailClient = new EmailClient(process.env.ACS_CONNECTION_STRING!);


export async function POST(request: Request) {
  try {
    const body = await request.json();
    await emailSchema.validate(body);

    const { email } = body;

    // Store email in Cosmos DB
    const result = await signUps.insertOne({ email });

    console.log(`Email submitted and stored: ${result}`);

        // Create the email message
    const message: EmailMessage = {
      senderAddress: 'DoNotReply@openspacelaunch.org',
      content: {
        subject: 'Welcome to the Open Space Launch Foundation Community! 🚀',
        plainText: `Dear Space Revolutionary,

Thank you for signing up for the Open Space Launch Foundation (OSLF) newsletter! We’re thrilled to have you join us on this exciting journey to democratize space exploration.

By subscribing, you’ll be among the first to hear about our latest projects, open-source tools, upcoming events, and opportunities to get involved. Whether you’re a seasoned space enthusiast, a budding scientist, or just curious about the cosmos, there’s something here for everyone!

Our mission at OSLF is to make space accessible to all through collaboration, innovation, and community-driven initiatives. Your support helps us push the boundaries of what’s possible, bringing together a global network of passionate individuals dedicated to exploring new frontiers.

What’s Next?
Keep an eye on your inbox for our upcoming newsletter, which will feature exciting updates, articles, and ways for you to contribute and stay engaged.

In the meantime, feel free to explore more about our vision, projects, and community at towardsrocketscience.com.

Thank you once again for your interest and support. Together, we can make space exploration a shared adventure for everyone!

Warm regards,
Daniel Sim
Founder, Open Space Launch Foundation`,
      },
      recipients: {
        to: [
          {
            address: email,
            displayName: 'Space Revolutionary',
          },
        ],
        bcc: [
          {
            address: "admin@openspacelaunch.org",
            displayName: "Open Space Launch Admin",
          }
        ],
      },
    };

    // Send the email
    const poller = await emailClient.beginSend(message);
    const response = await poller.pollUntilDone();

    console.log(`Thank you email sent: ${response}`);

    return NextResponse.json({ message: 'Email submitted successfully' });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
  }
}