'use client'
import { useParams } from "next/navigation"
import '@/styles/project-card.css'
import { TasksGraph } from "@/components/TasksGraph"

export default function Page() {
    const params = useParams()
    const id = params.projectId
    

    return(
        <>
            <div className="flex justify-center mt-10 ">
                <div className="w-[75%] flex bg-white project-card-shadow p-3 rounded grid grid-cols-12">
                    <div className="col-span-9 pe-3">
                        <p className="text-5xl mb-8">Nombre del proyecto</p>
                        <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, enim unde? Veniam recusandae eos iusto ipsam saepe architecto nam placeat libero, sit distinctio eum? Cupiditate natus, non aut officia, ea repellendus magni repellat dignissimos nam vel pariatur labore. Iure maxime hic, optio placeat omnis autem quibusdam distinctio vero dolorem similique.</p>
                        <TasksGraph />
                    
                    </div>
                    <div className="col-span-3 border-s ps-3">
                        <p className="text-lg">Miembros</p>
                    </div>

                </div>
            </div>
        </>
    )
}