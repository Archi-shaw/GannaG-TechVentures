"use client";

import React from "react";
import AllToolsNavbar from "@/app/components/AllToolsNavbar";
import ToolCard from "@/app/components/AllTools/ToolCard";
import { toolSections } from "@/app/dataStructure/toolsData";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";
export default function mycontent() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col space-y-7">
      <div className="flex flex-row items-center justify-between">
        <div className="w-2/3">
          <span className="text-3xl font-semibold">All Tools</span>
        </div>
        <div className="w-1/3 flex items-center justify-center space-x-2 -translate-x-6">

        <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-block cursor-pointer  px-2 py-3 rounded-sm"
    >
      {hovered ? <HiLightBulb size={30} /> : <HiOutlineLightBulb size={30} />}
    </div>    
        
          <input
            className="px-3 py-3 w-full bg-gray-300 rounded-sm"
            type="text"
            placeholder="What do you want to create?"
          />
        </div>
      </div>

      {/* <div>
        <AllToolsNavbar />
      </div> */}

      <div>
        {/* <ToolCard /> */}

        {toolSections.map((section) => (
          <div key={section.id} id={section.id}>
            {/* <h2 className="text-2xl font-semibold mb-4">{section.name}</h2> */}
            <div className="grid grid-cols-3 gap-y-5 gap-x-10">
              {section.tools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  icon={tool.icon}
                  description={tool.description}
                  onClick={() =>
                    router.push(
                      `/${tool.name.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
