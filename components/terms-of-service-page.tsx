"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./header";

export function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using the Open Space Launch Foundation website and
              services, you agree to be bound by these Terms of Service. If you
              do not agree to all the terms and conditions, you must not use our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Description of Service
            </h2>
            <p className="mb-4">
              Open Space Launch Foundation provides open-source software,
              educational resources, and collaborative platforms for space
              launch technology. Our services are subject to change and may be
              modified at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
            <p className="mb-4">
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You must not use our services in any
              way that violates any applicable local, state, national, or
              international law or regulation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Intellectual Property
            </h2>
            <p className="mb-4">
              The content, features, and functionality of our services are owned
              by Open Space Launch Foundation and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Open Source Licensing
            </h2>
            <p className="mb-4">
              Certain components of our services may be released under
              open-source licenses. Use of these components is subject to the
              terms of the applicable open-source license.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              Open Space Launch Foundation shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will
              provide notice of significant changes by posting an announcement
              on our website or sending you an email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
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
              By using our services, you acknowledge that you have read and
              understood these Terms of Service and agree to be bound by them.
            </p>
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
