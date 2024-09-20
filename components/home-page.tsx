"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Users, Database, Zap, School, Globe, Star } from "lucide-react";
import { EmailSubscriptionForm } from "./email-subscription-form";
import { MissionStatementSectionComponent } from "./mission-statement-section";
import { PartnersSectionComponent } from "./partners-section";

export function HomePage() {
  return (
    <main className="flex-1">
      <MissionStatementSectionComponent />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Democratizing Space Launch Technology
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Open Space Launch Foundation is developing OpenSASA - the
                world's first open-source launch vehicle development platform,
                making space exploration accessible to all.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="opensasa">
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-gray-200"
                >
                  Explore OpenSASA
                </Button>
              </Link>
              <Link href="#get-involved">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Join Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="founder-message"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex justify-center lg:order-last">
              <img
                alt="Founder of Open Space Launch Foundation"
                className="aspect-square overflow-hidden rounded-full object-cover object-center"
                height="300"
                src="/dan-headshot-uksa-accel.png?height=300&width=300"
                width="300"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  A Word from Our Founder
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  "As a child, I dreamed of exploring new worlds under the
                  stars. Today, I recognise that democratising access to space
                  is a monumental challenge that may take a lifetime or more to
                  achieve fully. Yet, with unwavering dedication, I founded the
                  Open Space Launch Foundation to make that dream a reality for
                  everyone, not just powerful nations and billionaires."
                </p>
                <div className="max-w-[600px] text-right">
                  <Link
                    href="/about/#founder-word-continued"
                    className="text-blue-500 hover:underline justify-right"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Over 140 Kickstarter backers
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    2000+ newsletter subscribers
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    5000+ social media followers
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#get-involved">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Join Our Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="opensasa"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            OpenSASA: Open Student and Amateur Space Agency
          </h2>
          <p className="text-center max-w-[800px] mx-auto text-gray-500 md:text-xl/relaxed mb-12">
            The world's first open-source launch vehicle development platform
            featuring high-performance physics and thermochemistry simulation
            with procedural CAD models optimised for manufacturing with robots
            in a garage.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Code className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Integrated Open-Source System
              </h3>
              <p className="text-gray-600">
                Design and manufacture space launch vehicles and operate
                missions with our comprehensive software and hardware solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Database className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Data-Driven Development
              </h3>
              <p className="text-gray-600">
                Collect, analyze, and integrate data from simulations, tests,
                and missions to continuously improve designs and systems.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Collaborative Platform</h3>
              <p className="text-gray-600">
                Enable knowledge sharing and collaboration among space
                enthusiasts, researchers, and professionals worldwide.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center mt-12">
            <Link href="opensasa">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Explore OpenSASA
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Mission
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Accelerate Innovation</h3>
              <p className="text-gray-600">
                Leverage cutting-edge research, AI, robotics, and advanced
                manufacturing to boost efficiency and expedite R&D.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <School className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Empower Amateurs & Students
              </h3>
              <p className="text-gray-600">
                Rally amateur and student space launch projects to use and
                contribute to OpenSASA, accelerating their progress towards
                orbital and beyond.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Expand Horizons</h3>
              <p className="text-gray-600">
                Push the boundaries of amateur space programs to achieve payload
                orbital insertion and interplanetary missions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PartnersSectionComponent />
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
                professional, there's a place for you in our mission. Get
                involved with OpenSASA and help shape the future of space
                exploration.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <EmailSubscriptionForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
