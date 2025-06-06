"use client";

import { Rocket, Globe, Users, Star } from "lucide-react";

export function MissionStatementSectionComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-blue-900 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Our Mission
          </h2>
          <p className="max-w-[800px] text-xl md:text-2xl text-gray-200 leading-relaxed">
            To advance the education of adults and children, particularly in the
            fields of space science, aerospace engineering, and related
            subjects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2">
              <Rocket className="w-12 h-12 text-blue-400" />
              <h3 className="text-xl font-semibold">Empower</h3>
              <p className="text-sm text-gray-300">
                Support student initiatives
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Globe className="w-12 h-12 text-green-400" />
              <h3 className="text-xl font-semibold">M.E. & Africa Focus</h3>
              <p className="text-sm text-gray-300">
                UK led, with a focus on underserved regions
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="w-12 h-12 text-yellow-400" />
              <h3 className="text-xl font-semibold">Collaborate</h3>
              <p className="text-sm text-gray-300">
                Foster international academic collaboration
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="w-12 h-12 text-red-400" />
              <h3 className="text-xl font-semibold">Innovate</h3>
              <p className="text-sm text-gray-300">
                Set new benchmarks in space science education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
