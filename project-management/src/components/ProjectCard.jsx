import Image from "next/image"
import '../styles/project-card.css'

import { Tag } from "./Tag"
import Member1 from "../images/Capa 2.png"
import Member2 from "../images/Capa 4.png"
import Member3 from "../images/Capa 5.png"
import Member4 from "../images/Capa 6.png"


export function ProjectCard() {
    return (
        <>
            <div className="project-card-shadow rounded-lg mt-2">
                <div className="bg-white rounded-md p-2">
                    <div className="flex justify-between items-start">
                        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur.</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="h-64 relative">
                        <Image
                            fill
                            style={{ objectFit: 'cover' }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJDjWwv-3uNFjV7y-fCwqHwE6o7QUddZzlQ&s"
                        />
                    </div>
                    <div className="mt-2 text-[1rem]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eaque?</p>
                    </div>
                    <div>
                        <Tag />
                        <Tag />
                        <Tag />
                    </div>
              
                        <div className="flex relative my-2 h-4">

                            <Image
                                src={Member1}
                                alt="miembro"
                                className="member-icon member-1"
                            />
                            <Image
                                src={Member2}
                                alt="miembro"
                                className="member-icon member-2"
                            />
                            <Image
                                src={Member3}
                                alt="miembro"
                                className="member-icon member-3"
                            />
                            <Image
                                src={Member4}
                                alt="miembro"
                                className="member-icon member-4"
                            />

                            <div className="member-icon other-members text-white">
                                1
                            </div>
                        </div>
             
                    <div className="flex justify-between items-center mt-2 mt-5">
                        <div className="border-2 border-green-500 rounded-xl px-2 text-md text-green-500 font-medium">
                            <p>En proceso</p>
                        </div>
                        <button className="bg-emerald-200 rounded-4xl p-2 enter-button-shadow">Ingresar</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}