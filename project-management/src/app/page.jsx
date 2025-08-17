'use client'
import Image from "next/image";
import { useEffect } from "react";
import { ProjectCard } from "../components/ProjectCard";
import data from "../database/data.json"

export default function Home() {

  useEffect(() => {
    console.log(data.projects[0].tasks)
  }, [])

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-[20rem] md:grid-cols-[20rem_20rem] lg:grid-cols-[20rem_20rem_20rem]  xl:grid-cols-[20rem_20rem_20rem_20rem] gap-6 mx-3 mt-10">
          {
            data.projects?.length &&
            data.projects.map((item) => 
              
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
