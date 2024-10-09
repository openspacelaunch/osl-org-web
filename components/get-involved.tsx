"use client";

import { EmailSubscriptionForm } from "./email-subscription-form";
import { JoinPatreonComponent } from "./join-patreon";

export function GetInvolvedComponent() {
  return (
    <section
      id="get-involved"
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join the Open Space Revolution
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you're a space enthusiast, student, researcher, or
              professional, there's a place for you in our mission. Get involved
              with OpenSASI and help shape the future of space exploration.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <EmailSubscriptionForm />
          </div>
          <JoinPatreonComponent />
        </div>
      </div>
    </section>
  );
}
