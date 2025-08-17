import '@/styles/project-card.css'
import Image from 'next/image'
import Member1 from "@/images/Capa 2.png"

export function Task() {
    return(
        <>
            <div className="bg-slate-200 rounded w-full h-min flex p-2 grid grid-cols-12 mb-1">
                <div className="col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-9 text-[0.95rem]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, earum?</p>
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-1 border-s border-black flex items-center justify-center">
                    <div className="bg-red-200 flex justify-center items-center px-1 rounded">
                        hola
                    </div>
                </div>
                 <div className="col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-1 border-s border-black flex items-center justify-center">
                    <div className="bg-red-200 flex justify-center items-center px-1 rounded">
                        hola
                    </div>
                </div>
                   <div className="col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-1 border-s border-black flex items-center justify-center">
                    <div className="bg-red-200 flex justify-center items-center px-1 rounded">
                          <Image
                            src={Member1}
                            alt="miembro"
                            className="member-icon "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}