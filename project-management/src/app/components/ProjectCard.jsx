import Image from "next/image"

export function ProjectCard() {
    return(
        <>
            <div className="">
                <div className="border p-2  4xl:w-32">
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