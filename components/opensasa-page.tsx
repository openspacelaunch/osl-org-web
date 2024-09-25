"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Code,
  Database,
  Users,
  Zap,
  Globe,
  GitBranch,
  Cpu,
  Cog,
  Bot,
  Brain,
  BarChart2,
  Wifi,
} from "lucide-react";
import { EmailSubscriptionForm } from "./email-subscription-form";
import { GetInvolvedComponent } from "./get-involved";

export function OpenSasaPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                OpenSASA: Open Student and Amateur Space Agency
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                The world's first open-source launch vehicle development
                platform, democratizing space exploration for all.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#features">
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-gray-200"
                >
                  Explore Features
                </Button>
              </Link>
              <Link href="#get-involved">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="OpenSASA Structure"
              className="mx-auto w-full h-auto rounded-xl object-contain object-center sm:w-full lg:order-last"
              src="/opensasa-structure.png"
              width={1024}
              height={768}
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Revolutionizing Space Launch Technology
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                OpenSASA is not just a self-assembled space agency; it's a
                movement. By combining cutting-edge technology with the power of
                open-source collaboration, we're making space exploration
                accessible to innovators, researchers, and enthusiasts around
                the world.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Design and simulate advanced rocket propulsion systems
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Develop and test flight software in a collaborative
                    environment
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-500">
                    Analyze and optimize launch vehicle performance with big
                    data
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Key Features of OpenSASA
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Code className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Integrated Open-Source System
              </h3>
              <p className="text-gray-600">
                Comprehensive software and hardware solutions for designing and
                manufacturing space launch vehicles.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Database className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                High-Performance Simulations
              </h3>
              <p className="text-gray-600">
                Advanced physics and thermochemistry simulations for accurate
                modeling and testing.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Collaborative Platform</h3>
              <p className="text-gray-600">
                Enabling knowledge sharing and collaboration among space
                enthusiasts, researchers, and professionals worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Procedural CAD Models</h3>
              <p className="text-gray-600">
                Optimized for manufacturing with robots, bringing advanced
                production capabilities to garages and small workshops.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Mission Control Integration
              </h3>
              <p className="text-gray-600">
                Comprehensive tools for planning, executing, and monitoring
                space launch missions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <GitBranch className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Version Control & Data Management
              </h3>
              <p className="text-gray-600">
                Robust systems for tracking changes, managing data, and
                facilitating collaborative development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="lorenlib"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            The LorenLib Suite
          </h2>
          <p className="text-center max-w-[800px] mx-auto text-gray-600 mb-12">
            LorenLib is a comprehensive open-source ecosystem that empowers
            space enthusiasts, researchers, and professionals to collaboratively
            advance space exploration.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Cpu className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenSim</h3>
              <p className="text-gray-600">
                High-performance fluid-solid physics simulations for modeling
                and analyzing complex launch dynamics.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Code className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenCAD</h3>
              <p className="text-gray-600">
                Aerospace-specific CAD tool for creating detailed components and
                assemblies with real-time collaboration.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Cog className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenMaker</h3>
              <p className="text-gray-600">
                Integrated manufacturing tool supporting 3D printing, CNC
                machining, and composite fabrication.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenOps</h3>
              <p className="text-gray-600">
                Mission operations management platform for planning, execution,
                and monitoring of space missions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Bot className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenRobotics</h3>
              <p className="text-gray-600">
                Suite of tools for developing autonomous robots for complex
                tasks in challenging space environments.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Brain className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenAI</h3>
              <p className="text-gray-600">
                AI and machine learning tools for trajectory optimization,
                predictive maintenance, and autonomous decision-making.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart2 className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenData</h3>
              <p className="text-gray-600">
                Data management and analytics platform for collecting,
                processing, and visualizing mission-critical data.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wifi className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">LorenAvionics</h3>
              <p className="text-gray-600">
                Tools for designing and developing critical avionics systems,
                including GNC and communication networks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GetInvolvedComponent />
    </main>
  );
}
