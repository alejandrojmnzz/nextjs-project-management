import '@/styles/project-card.css'
import Image from 'next/image'
import Member1 from "@/images/Capa 2.png"
import clsx from "clsx"

export function Task({description, priority, status, member}) {
    return(
        <>
            <div className="bg-slate-200 rounded w-full h-min flex p-2 grid grid-cols-12 mb-1">
                <div className="col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-5 2xl:col-span-7 text-[0.95rem]">
                    <p>{description}</p>
                </div>
                <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-2 border-s border-slate-400 flex items-center justify-center">
                    <div className={clsx("flex justify-center items-center px-1 rounded text-[1rem]", {
                        "bg-red-500": priority == "Urgente",
                        "bg-orange-400": priority == "Crítico",
                        "bg-yellow-300": priority == "Próximo",
                        "bg-green-300": priority == "Largo plazo",
                    })}>
                        {priority}
                    </div>
                </div>
                 <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-2 border-s border-slate-400 flex items-center justify-center">
                    <div className={clsx("flex justify-center items-center px-1 rounded text-[0.9rem]", {
                        "bg-[rgb(39,235,0)]": status == "Completado",
                        "bg-[rgb(255,188,44)]": status == "En proceso",
                        "bg-[rgb(255,0,0)]": status == "Sin iniciar"
                    })}>
                        {status}
                    </div>
                </div>
                   <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 border-s border-slate-400 flex items-center justify-center">
                    <div className="flex justify-center items-center px-1 rounded">
                          <Image
                          width={0}
                          height={0}
                            src={member}
                            alt="miembro"
                            className="member-icon "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}