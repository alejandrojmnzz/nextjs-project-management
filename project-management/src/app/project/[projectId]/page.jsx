'use client'
import { useParams } from "next/navigation"
import '@/styles/project-card.css'
import { TasksGraph } from "@/components/TasksGraph"
import { Task } from "@/components/Task"
import Image from "next/image"
import Member1 from "@/images/Capa 2.png"
import { Tag } from "@/components/Tag"

export default function Page() {
    const params = useParams()
    const id = params.projectId
    

    return(
        <>
            <div className="flex justify-center mt-10 items-center">
                <div className="w-[75%] flex bg-white project-card-shadow p-3 rounded grid grid-cols-12">
                    <div className="col-span-9 pe-3">
                        <p className="text-5xl mb-8">Nombre del proyecto</p>
                        <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, enim unde? Veniam recusandae eos iusto ipsam saepe architecto nam placeat libero, sit distinctio eum? Cupiditate natus, non aut officia, ea repellendus magni repellat dignissimos nam vel pariatur labore. Iure maxime hic, optio placeat omnis autem quibusdam distinctio vero dolorem similique.</p>
                        

                             
                                    <p className="text-xl font-semibold ms-30 mt-4">Tareas</p>
                            
                        <div className="flex justify-between h-max">
                            <TasksGraph />
                            <div className=" w-full m-3 h-82 tasks project-card-shadow rounded">
                                
                                <div className="bg-slate-300 p-2  h-min">
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    

    
                                
                                </div>
                            </div>
                  
                        </div>
                        
                    </div>
                    <div className="col-span-3 border-s border-slate-400 ps-3">
                        <p className="text-xl font-semibold mb-1">Miembros</p>
                        <div className="flex items-center mb-2 pt-2 border-t border-slate-400">
                              <Image
                                src={Member1}
                                alt="miembro"
                                width={40}
                                height={40}
                                className="rounded-[3rem]"
                            />
                            <p className="ms-3 text-xl">Pepe Sech Tilin Ligma</p>
                        </div>
                               <div className="flex items-center mb-2 pt-2 border-t border-slate-400">
                              <Image
                                src={Member1}
                                alt="miembro"
                                width={40}
                                height={40}
                                className="rounded-[3rem]"
                            />
                            <p className="ms-3 text-xl">Pepe Sech Tilin Sigma</p>
                        </div>
                               <div className="flex items-center mb-2 pt-2 border-t border-slate-400">
                              <Image
                                src={Member1}
                                alt="miembro"
                                width={40}
                                height={40}
                                className="rounded-[3rem]"
                            />
                            <p className="ms-3 text-xl">Pepe Sech Tilin Sigma</p>
                        </div>
                        <div className="flex items-center mb-2 pt-2 border-t border-slate-400">
                              <Image
                                src={Member1}
                                alt="miembro"
                                width={40}
                                height={40}
                                className="rounded-[3rem]"
                            />
                            <p className="ms-3 text-xl">Pepe Sech Tilin Sigma</p>
                        </div>
                        <p className="text-xl font-semibold mb-1">Etiquetas</p>
                        <div className="flex justify-center grid grid-cols-3">
                            <div className="col-span-1 flex justify-center">
                                <Tag />
                            </div>
                                <div className="col-span-1 flex justify-center">
                                <Tag />
                            </div>
                           <div className="col-span-1 flex justify-center">
                                <Tag />
                            </div>
                           <div className="col-span-1 flex justify-center">
                                <Tag />
                            </div>
                           <div className="col-span-1 flex justify-center">
                                <Tag />
                            </div>
                           <div className="col-span-1 flex justify-center">
                                <Tag />
                            </div>
                       
                  
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}