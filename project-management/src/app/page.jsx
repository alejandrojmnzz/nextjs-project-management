import Image from "next/image";
import { ProjectCard } from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-[20rem] md:grid-cols-[20rem_20rem] lg:grid-cols-[20rem_20rem_20rem]  xl:grid-cols-[20rem_20rem_20rem_20rem] gap-4 mx-3 mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </div>
      </div>
    </>
  )
}
