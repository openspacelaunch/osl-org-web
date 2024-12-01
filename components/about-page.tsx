"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Users,
  Star,
  BarChart2,
  Code,
  Database,
  Share2,
  Shield,
  Zap,
  Briefcase,
  GraduationCap,
  Plane,
} from "lucide-react";
import { TrusteesSectionComponent } from "./trustees-section";
import { GetInvolvedComponent } from "./get-involved";

export function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Open Space Launch
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Democratizing space exploration through open-source technology
                and global collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="objectives"
        className="w-full py-12 md:py-24 lg:py-32 bg-white0"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Objectives
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                1. Develop Open Student-Amateur Space Initiative (OpenSASI)
              </h3>
              <p className="text-gray-600 mb-4">
                Create a distributed system comprised of integrated open-source
                software and hardware to revolutionize space exploration:
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li className="flex items-start space-x-2">
                  <Code className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-sm">
                    Design and manufacture space launch vehicles and supporting
                    systems
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Rocket className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-sm">
                    Design and operate space launch missions
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Database className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-sm">
                    Collect data from simulations, tests, and mission operations
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <BarChart2 className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-sm">
                    Analyze and integrate data to improve designs and
                    decision-making
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Share2 className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-sm">
                    Enable collaboration via data and knowledge sharing
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Zap className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-sm">
                    Leverage contemporary research, AI, and robotics
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-1" />
                  <span className="text-sm">
                    Boost safety, reliability, and cost efficiency in space
                    exploration
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                2. Rally Amateur and Student Projects
              </h3>
              <p className="text-gray-600">
                Encourage and support amateur and student space launch projects
                to use and contribute to OpenSASI, fostering a collaborative
                ecosystem for space exploration enthusiasts.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                3. Accelerate Space Programs
              </h3>
              <p className="text-gray-600">
                Empower amateur and student space programs to achieve ambitious
                goals, including payload orbital insertion, trans-lunar
                missions, and interplanetary exploration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TrusteesSectionComponent />
      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Join The Team That's Making It Happen
          </h2>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Call for Advisors and Mentors
            </h3>
            <p className="text-center text-gray-600 mb-8">
              We are proud to have assembled a diverse team of experienced
              professionals to guide and support our mission:
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <Briefcase className="h-12 w-12 mb-4 text-blue-600" />
                <h4 className="text-lg font-semibold mb-2">Business Mentors</h4>
                <p className="text-sm text-gray-500">
                  Successful entrepreneurs providing strategic guidance
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart2 className="h-12 w-12 mb-4 text-blue-600" />
                <h4 className="text-lg font-semibold mb-2">
                  Business Analysts
                </h4>
                <p className="text-sm text-gray-500">
                  Experts in market analysis and financial planning
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 mb-4 text-blue-600" />
                <h4 className="text-lg font-semibold mb-2">Astronauts</h4>
                <p className="text-sm text-gray-500">
                  Experienced space travelers providing invaluable insights
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Plane className="h-12 w-12 mb-4 text-blue-600" />
                <h4 className="text-lg font-semibold mb-2">
                  Ex-Air Force Pilots
                </h4>
                <p className="text-sm text-gray-500">
                  Bringing expertise in aviation and aerospace operations
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="h-12 w-12 mb-4 text-blue-600" />
                <h4 className="text-lg font-semibold mb-2">
                  Academics and Professionals
                </h4>
                <p className="text-sm text-gray-500">
                  Leading people in aerospace engineering and space exploration
                  technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="founder" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Founder of Open Space Launch"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last h-auto"
              height="310"
              src="/oslf-look-at-stars.png?height=310&width=550"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                A Word from Our Founder
              </h2>
              <div className="space-y-4 text-gray-500">
                <p>
                  As a child, I dreamed of exploring new worlds under the stars.
                  Today, I recognise that democratising access to space is a
                  monumental challenge that may take a lifetime or more to
                  achieve fully. Yet, with unwavering dedication, I founded the
                  Open Space Launch to make that dream a reality for everyone,
                  not just powerful nations and billionaires.
                </p>
                <p id="founder-word-continued">
                  Leveraging my background in Simulation Engineering, AI, and
                  Data Science at Elsevier and PlayStation and collaboration
                  with esteemed teams like UCL Rocket and Sheffield University
                  Sunride, we are laying the foundations for a future where
                  space exploration is not just a privilege for a few but an
                  opportunity for all.
                </p>
                <p>
                  Our flagship project, OpenSASI, is the world's first
                  open-source launch vehicle development platform featuring
                  high-performance physics and thermochemistry simulation with
                  procedural CAD models optimised for manufacturing with robots
                  in a garage. Starting with propulsion, we are expanding into
                  vehicle and test facility development and, ultimately, mission
                  control. We are creating a collaborative environment through
                  digital twins—imagine GitHub, Kaggle, Wikipedia, and
                  Thingiverse united but for space!
                </p>
                <p>
                  With the support of over 140 Kickstarter backers, 2000
                  newsletter subscribers, and 5000 social media followers, we
                  are focused and building. Join us in making a difference!
                  Together, we will realise the democratisation of space
                  exploration and turn the impossible into the inevitable.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Over 140 Kickstarter backers
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    2000+ newsletter subscribers
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    5000+ social media followers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="structure"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Structure
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <Image
              alt="Open Space Launch Structure"
              className="w-full max-w-3xl h-auto rounded-xl shadow-lg"
              height="600"
              src="/oslf-structure-simple.png"
              width="800"
            />
            <p className="text-center text-gray-500 mt-4">
              Open Space Launch is structured to maximize collaboration,
              innovation, and transparency in our mission to democratize space
              exploration.
            </p>
          </div>
        </div>
      </section>
      <GetInvolvedComponent />
    </main>
  );
}
