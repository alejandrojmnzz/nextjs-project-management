'use client'
import { SegmentStateProvider } from "next/dist/next-devtools/userspace/app/segment-explorer-node";
import { ProjectCard } from "../components/ProjectCard";
import data from "../database/data.json"
import { useStore, useState } from "@/store/store";
import { useEffect } from "react";


export default function Home() {

  const filteredProjects = useStore((state) => state.filteredProjects)

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-[20rem] md:grid-cols-[20rem_20rem] lg:grid-cols-[20rem_20rem_20rem]  xl:grid-cols-[20rem_20rem_20rem_20rem] gap-6 mx-3 mt-10">
          {
            data.projects?.length &&

            filteredProjects.filtering ?
            filteredProjects.projects.map((item) => 
              <ProjectCard 
                key={item.id}
                id={item.id}
                title={item.title} 
                image={item.image} 
                description={item.description} 
                tags={item.tags} 
                members={item.members} 
                status={item.status}
                tasks={item.tasks}
                />
            )
            :
            data.projects?.map((item) => 
              
              <ProjectCard 
                key={item.id}
                id={item.id}
                title={item.title} 
                image={item.image} 
                description={item.description} 
                tags={item.tags} 
                members={item.members} 
                status={item.status}
                tasks={item.tasks}
                />
            )
          }

        </div>
      </div>
    </>
  )
}
