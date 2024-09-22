"use client";

import { User, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function TrusteesSectionComponent() {
  const trustees = [
    {
      name: "Daniel Sim",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQG6nnEhZvkfhA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721664550390?e=1732147200&v=beta&t=IE-2szD1jWASd92pF6MBkL7t2zShovt3ALWHmlZv1Ao",
      intro:
        "Visionary behind the Open Space Launch Foundation, with a background in Engineering Leadership, Simulation, AI, and Data Science. Creator of Meco Rocket Simulator, a popular rocket simulation software. Daniel is passionate about democratizing access to space and has a strong track record of leading complex, multi-disciplinary projects. His commitment to open-source principles and his dedication to fostering a collaborative community are at the core of the Foundation’s mission.",
      webpage: "https://www.linkedin.com/in/danniesim/",
    },
    {
      name: "Eddy James",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQH5Obca31cezw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680104453019?e=1732147200&v=beta&t=I9705dIxRd3CYcsQZs9dZ6STbCghG8q4Xszr2GP_Ecs",
      intro:
        "Eddy James is a seasoned business founder with a strong background in innovation and research and development (R&D) across the space, Earth Observation (EO), and geospatial information sectors. His work has spanned from start-ups to established organizations, where he has played a pivotal role in advancing cutting-edge technologies and fostering collaborative partnerships. James’s deep understanding of the space industry and his strategic vision are invaluable assets as we navigate the complexities of democratizing access to space.",
      webpage: "https://www.linkedin.com/in/jameseddy1/",
    },
    {
      name: "Malcolm Pinto",
      // image: "/placeholder.svg?height=200&width=200",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQHMCvQ_xNAgpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1606319898030?e=1732147200&v=beta&t=qAazpRgwJ_Ap4mS8ThVCeD8slSXhSDRB5hzinB-9niY",
      intro:
        "Malcolm Pinto brings a unique blend of strategic insight and operational acumen to the Foundation. With years of experience in high-level project management and leadership roles, Malcolm has been instrumental in driving complex initiatives to successful outcomes. His expertise in navigating regulatory landscapes and his commitment to promoting ethical and sustainable space practices make him a key contributor to our mission. Malcolm’s focus on ensuring the alignment of our initiatives with broader societal goals helps us maintain our commitment to open, collaborative, and responsible space exploration.",
      webpage: "https://www.linkedin.com/in/malcolmpinto77/",
    },
    {
      name: "Adriel Tey",
      image:
        "https://media.licdn.com/dms/image/v2/C4E03AQFa_cPr9IMomw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517621421460?e=1732147200&v=beta&t=jyxaYdBBrO3GXTk_eDTXPIBW-7pNiAwcRFcVqmAA-2w",
      intro:
        "Adriel Tey is a business intelligence expert with a knack for turning complex data into actionable insights. With a background in quantitative analytics, strategic planning, and financial analysis, Adriel has a keen eye for identifying opportunities and optimizing performance. His work has driven significant business impact across various sectors, and his analytical expertise is instrumental in guiding the Foundation’s data-driven initiatives. Adriel’s strategic vision helps us leverage information to advance our mission of democratizing space exploration.",
      webpage: "https://www.linkedin.com/in/adrieltey/",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Our Trustees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {trustees.map((trustee) => (
            <div
              key={trustee.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                {trustee.image ? (
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <User className="w-24 h-24 text-gray-400" />
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4">{trustee.name}</h3>
              <p className="text-gray-600 max-w-md">{trustee.intro}</p>
              <Link href={trustee.webpage} className="text-blue-600">
                <Linkedin className="mr-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
