'use client'
import { useParams } from "next/navigation"
import '@/styles/project-card.css'
import { TasksGraph } from "@/components/TasksGraph"
import { Task } from "@/components/Task"
import Image from "next/image"
import Member1 from "@/images/Capa 2.png"
import { Tag } from "@/components/Tag"
import { useState, useEffect } from "react"
import data from "@/database/data.json"

export function ProjectView() {
    const [project, setProject] = useState([])

    const params = useParams()
    const id = params.projectId
    useEffect(() => {
        setProject(data.projects[id - 1])
    }, [])
    return (
        <>
            <div className="flex justify-center mt-10 items-center">
                <div className="w-[75%] flex bg-white project-card-shadow p-3 rounded grid grid-cols-12">
                    <div className="col-span-9 pe-3">
                        <p className="text-5xl mb-8">{project?.title}</p>
                        <p className="text-lg">{project?.description}</p>
                             
                        <p className="text-xl font-semibold ms-30 mt-4">Tareas</p>
                            
                        <div className="flex justify-between h-max">
                            <TasksGraph tasks={project?.tasks}/>
                            <div className=" w-full m-3 h-82 tasks rounded tasks-shadow">
                                
                                <div className="bg-slate-300 p-2 h-min">
                                    {
                                        project?.tasks &&
                                        project?.tasks.map((task, index) => 
                                            <Task key={index} description={task.description} priority={task.priority} status={task.status} member={task.member} />
                                        )
                                    }

                                </div>
                            </div>
                  
                        </div>
                        
                    </div>
                    <div className="col-span-3 border-s border-slate-400 ps-3">
                        <p className="text-xl font-semibold mb-1">Miembros</p>

                            {
                                project?.members &&
                                project?.members.map((member) =>
                                <div className="flex items-center mb-2 pt-2 border-t border-slate-400">
                                        <Image
                                            src={member.image}
                                            alt="miembro"
                                            width={40}
                                            height={40}
                                            className="rounded-[3rem] max-w-32"
                                        />
                                    <p className="ms-3 text-xl">{member.name} {member.last_name}</p>
                                </div>
                                )
                            }
                              
                        <p className="text-xl font-semibold mb-1">Etiquetas</p>
                        <div className="flex justify-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                            {
                                project?.tags &&
                                project?.tags.map((tag) =>
                                    <div className="flex justify-center">
                                        <Tag name={tag} />
                                    </div>
                                )
                            }              
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}