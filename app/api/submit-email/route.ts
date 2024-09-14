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
        subject: 'Subscription Confirmation',
        plainText: `Thank you joining the Open Source Space revolution!`,
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