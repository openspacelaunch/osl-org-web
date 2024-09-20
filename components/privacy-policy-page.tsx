"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LastModifiedDate from "./last-modified-date";

export function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Open Space Launch Foundation is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you provide directly to
              us, such as your name, email address, and any other information
              you choose to provide when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in our forums or community discussions</li>
              <li>Contact us for support or information</li>
            </ul>
            <p className="mb-4">
              We may also collect non-personal information automatically when
              you visit our website, including your IP address, browser type,
              and usage data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>
                Communicate with you about our services, updates, and events
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>
                Monitor and analyze trends, usage, and activities in connection
                with our services
              </li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Sharing of Information
            </h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, as long as those
              parties agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no method of transmission
              over the Internet or method of electronic storage is 100% secure,
              and we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal
              information. You can do this by contacting us directly. We will
              respond to your request within a reasonable timeframe.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date at the bottom of this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <address className="not-italic">
              Open Space Launch Foundation
              <br />
              Email: admin@openspacelaunch.org
              <br />
              Address: 86-90 Paul Street, London, EC2A 4NE, United Kingdom
            </address>
          </section>

          <div className="mt-12">
            <p className="mb-4">
              By using our website, you consent to our Privacy Policy and agree
              to its terms.
            </p>
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>

          <LastModifiedDate filePath="components/privacy-policy-page.tsx" />
        </div>
      </main>
    </div>
  );
}
