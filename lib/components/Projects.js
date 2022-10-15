import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Projects() {
  const [currentProject, setCurrentProject] = useState("");

  return (
    <div className="space-y-2">
      <button className="flex space-x-2 items-center">
        <div className="text-4xl font-semibold">GRAINYENTS</div>
        <ArrowRightIcon className="w-7 h-7" />
      </button>
      <button className="flex space-x-2 items-center">
        <div className="text-4xl font-light">JUNK</div>
        <ArrowRightIcon className="w-7 h-7" />
      </button>
      <button className="flex space-x-2 items-center">
        <div className="text-4xl font-light">CHAT APP</div>
        <ArrowRightIcon className="w-7 h-7" />
      </button>
      <button className="flex space-x-2 items-center">
        <div className="text-4xl font-light">MONTANAHEAD</div>
        <ArrowRightIcon className="w-7 h-7" />
      </button>
      <button className="flex space-x-2 items-center">
        <div className="text-4xl font-light">TWITTER CLONE</div>
        <ArrowRightIcon className="w-7 h-7" />
      </button>
      <button className="flex space-x-2 items-center">
        <div className="text-4xl font-light">2D RPG</div>
        <ArrowRightIcon className="w-7 h-7" />
      </button>
    </div>
  );
}

export default Projects;
