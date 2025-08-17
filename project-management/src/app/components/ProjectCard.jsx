import Image from "next/image"
import '../styles/project-card.css'

export function ProjectCard() {
    return(
        <>
            <div className="project-card-shadow">
                <div className="bg-white rounded-lg p-2">
                    <p className="text-2xl">Nombre</p>
                    <div className="h-86 relative">
                        <Image 
                        fill
                        style={{ objectFit: 'cover' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJDjWwv-3uNFjV7y-fCwqHwE6o7QUddZzlQ&s"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}