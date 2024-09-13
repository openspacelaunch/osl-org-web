"use client";

import { Button } from "@/components/ui/button";
import {
  Rocket,
  Users,
  Globe,
  Star,
  BarChart2,
  CheckCircle,
} from "lucide-react";

export function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Open Space Launch Foundation
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Democratizing space exploration through open-source technology
                and global collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Mission
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Rocket className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">OpenSLS Development</h3>
              <p className="text-gray-600">
                Develop the Open Space Launch System (OpenSLS), a distributed
                system of integrated open-source software and hardware for space
                launch vehicles and missions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-gray-600">
                Rally amateur and student space launch projects to use and
                contribute to OpenSLS, fostering a global community of space
                enthusiasts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Accelerate Space Programs
              </h3>
              <p className="text-gray-600">
                Empower amateur and student space programs to achieve payload
                orbital insertion and trans-lunar and interplanetary missions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="founder"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Founder of Open Space Launch Foundation"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/dan-headshot-uksa-accel.png?height=310&width=550"
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
                  Open Space Launch Foundation to make that dream a reality for
                  everyone, not just powerful nations and billionaires.
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
                  Our flagship project, OpenSLS, is the world's first
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
            <img
              alt="Open Space Launch Foundation Structure"
              className="w-full max-w-3xl h-auto rounded-xl shadow-lg"
              height="600"
              src="/oslf-structure-simple.png"
              width="800"
            />
            <p className="text-center text-gray-500 mt-4">
              The Open Space Launch Foundation is structured to maximize
              collaboration, innovation, and transparency in our mission to
              democratize space exploration.
            </p>
          </div>
        </div>
      </section>
      <section
        id="objects"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Objects of the Foundation
          </h2>
          <p className="text-center text-gray-600 mb-8">
            As a Charitable Incorporated Organisation (CIO), the Open Space
            Launch Foundation is committed to the following objects:
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Develop OpenSLS</h3>
                <p className="text-gray-600">
                  To develop Open Space Launch System (OpenSLS) - a distributed
                  system comprised of integrated open-source software and
                  hardware for designing and manufacturing space launch
                  vehicles, operating space launch missions, collecting and
                  analyzing data, and enabling collaboration among space
                  enthusiasts, researchers, and professionals.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Rally Amateur and Student Projects
                </h3>
                <p className="text-gray-600">
                  To rally amateur and student space launch projects to use and
                  contribute to OpenSLS, fostering a global community of space
                  enthusiasts and promoting knowledge sharing in the field of
                  space exploration.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Accelerate Space Programs
                </h3>
                <p className="text-gray-600">
                  To accelerate amateur and student space programs to achieve
                  payload orbital insertion and trans-lunar and interplanetary
                  missions, pushing the boundaries of what's possible in
                  non-professional space exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="get-involved"
        className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Mission
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of the revolution in space exploration. Whether you're a
                student, engineer, or space enthusiast, there's a place for you
                in our community.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
