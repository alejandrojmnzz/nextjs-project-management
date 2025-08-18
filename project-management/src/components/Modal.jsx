import "@/styles/modal.css"
import { useState } from "react"
import { useStore } from "@/store/store"
import { ProjectsGraph } from "./ProjectsGraph"

export function Modal({projectsGraph=false, priorityGraph=false}) {

    const modal = useStore((state) => state.modal)
    const toggleModal = useStore((state) => state.toggleModal)


    return (
        <>
            <button className='me-4 cursor-pointer' onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
            </button>
            {
                modal &&
                <>
                    <div className="modal">
                        <div className="overlay" onClick={toggleModal}></div>
                        <div className="modal-content">
                            {
                                projectsGraph &&
                                <>
                                    <div className="flex justify-center text-xl">
                                        <h1>Progreso en mis proyectos</h1>
                                    </div>
                                    <ProjectsGraph />
                                </>
                                
                            }
                            <button className="close-modal hover:bg-slate-200 rounded-lg cursor-pointer" onClick={toggleModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </>
            }


        </>
    )
}