'use client'
import Image from "next/image"
import '../styles/project-card.css'
import { useRouter } from "next/navigation"
import { Tag } from "./Tag"
import clsx from "clsx"

export function ProjectCard({ id, title, image, description, tags, members, status }) {
    
    const modal = 0
    const router = useRouter()

    return (
        <>
            <div className={clsx("project-card-shadow rounded-lg mt-2 relative", {"-z-1": modal})}>
                <div className="bg-white rounded-md p-2">
                    <div className="flex justify-between items-start">
                        <p className="text-2xl">{title}</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                <path strokeWidth="round" strokeLinecap="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="h-64 relative">
                        <Image
                            fill
                            style={{ objectFit: 'cover' }}
                            src={image}
                        />
                    </div>
                    <div className="mt-2 text-[1rem]">
                        <p>{description}</p>
                    </div>
                    <div className="flex">

                        {
                            tags &&
                            tags?.map((tag, index) => {
                                if (index <= 2) return (
                                    <Tag key={index} name={tag} />
                                )
                            }
                            )
                        }

                    </div>
                    <div className="flex relative my-2 h-4">
                        {
                            members?.map((member, index) => {
                                if (index <= 3) {
                                    return (
                                        <Image
                                            key={id}
                                            width={0}
                                            height={0}
                                            src={member.image}
                                            alt="miembro"
                                            className={clsx("member-icon", {
                                                "member-1": index == 0,
                                                "member-2": index == 1,
                                                "member-3": index == 2,
                                                "member-4": index == 3,
                                            })}
                                        />
                                    )
                                } else if (index == 4) {
                                    return (
                                        <div className="member-icon other-members text-white">
                                            {members.length}
                                        </div>
                                    )
                                }
                            }

                            )
                        }


                    
                    </div>

                    <div className="flex justify-between items-center mt-2 mt-5">
                        <div className={clsx("border-2 rounded-xl px-2 text-md font-medium", {
                            "border-green-500 text-green-500": status == "Completado",
                            "border-[rgb(255,188,44)] text-[rgb(255,188,44)]": status == "En proceso",
                            "border-[rgb(255,0,0)] text-[rgb(255,0,0)]": status == "Sin iniciar"
                        })}>
                            <p>{status}</p>
                        </div>
                        <button className="bg-emerald-200 rounded-2xl p-2 enter-button-shadow cursor-pointer" onClick={() => router.push(`/project/${id}`)}>Ingresar</button>

                    </div>
                </div>
            </div>
        </>
    )
}