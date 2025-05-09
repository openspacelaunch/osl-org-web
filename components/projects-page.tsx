"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Handshake,
  ArrowRight,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";
import { GetInvolvedComponent } from "./get-involved";

export function ProjectsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Projects
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Discover the innovative projects and collaborations driving the
                future of open-source space exploration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="meco-simulator"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Meco Rocket Simulator"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height={310}
              src="/meco_v3_banner_just_funded.png"
              width={550}
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meco Rocket Simulator
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meco Rocket Simulator by Loren Aerospace is a revolutionary tool
                for designing, building, and testing rocket engines in a
                gamified and interactive manner. Although Meco itself is not
                open-sourced, it utilizes the open-source core technology,
                LorenLib, to perform high-fidelity simulations based on
                real-world physics and data from actual rocket engines.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Interactive Rocket Engine Design
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Accurate physics-based simulations
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Campaigns and Real-World Scenarios
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Community-Driven Development
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://mecorocketsimulator.com">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Try Meco Rocket Simulator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="ucl-rocket"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                UCL Rocket Collaboration
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're proud to partner with UCL Rocket, a university team
                participating in the annual Race2Space UK student competition.
                This collaboration aims to support the next generation of space
                engineers in creating space-capable rocket engines.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Mentorship and technical support for UCL Rocket team
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Participation in Race2Space UK student competition
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Fostering innovation in student-led space projects
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://race2space.org.uk/news/l1q9gzso0lop5kcmf4hk2sk8qr771q">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Learn More About UCL Rocket
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              alt="UCL Rocket Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height={310}
              src="/ucl-rocket-race2space.jpg"
              width={550}
            />
          </div>
        </div>
      </section>
      <section id="art-mou" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Collaboration with A.R.T.
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're excited to announce our Memorandum of Understanding (MOU)
                with Advanced Rocket Technologies (A.R.T.), marking a
                significant step forward in open-source space exploration.
              </p>
              <div className="space-y-2 border-l-4 border-blue-600 pl-4 italic">
                <p className="text-gray-600">
                  "This collaboration between the foundation's commercial arm -
                  Loren Aerospace and A.R.T. represents a milestone in
                  democratizing space technology. By combining our expertise and
                  resources, we aim to accelerate innovation and make space more
                  accessible to enthusiasts and researchers worldwide."
                </p>
                <p className="text-sm text-gray-500">
                  - Daniel Sim, Founder, Open Space Launch Foundation
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <Handshake className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Joint development of open-source rocket technologies
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Handshake className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Shared research and development resources
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Handshake className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Collaborative educational initiatives
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://spacetech-gulf.com/2024/09/advanced-rocket-technologies-announces-strategic-partnerships/">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Read Full Press Release
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              alt="A.R.T. Collaboration"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full"
              height={310}
              src="/A.R.T_Press-release-1.png"
              width={550}
            />
          </div>
        </div>
      </section>
      <GetInvolvedComponent />
    </main>
  );
}
