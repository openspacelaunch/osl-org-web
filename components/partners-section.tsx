"use client";

import Image from "next/image";

export function PartnersSectionComponent() {
  const partners = [
    {
      name: "Race2Space",
      logo: "/race2space-logo.png",
    },
    { name: "Advanced Rocket Technologies", logo: "/advancedrocket_logo.jpg" },
    {
      name: "UK Space Agency",
      logo: "/uksa-accel-white-on-transp.png",
    },
    {
      name: "University College London",
      logo: "/uclrocket_cover.jpg",
    },
    { name: "UK Rocketry Association", logo: "/ukra.png" },
    {
      name: "American Institute of Aeronautics and Astronautics",
      logo: "/aiaa.png",
    },
    {
      name: "Tripoli Rocketry Association",
      logo: "/Tripoli-rocketry-association.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
          Our Partners and Associations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-full h-24 p-4"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 256px) 100vw, (max-width: 512px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
