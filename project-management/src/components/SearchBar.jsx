import { useState } from 'react';
import { useStore } from "@/store/store";

export function SearchBar() {

    const filterProjects = useStore((state) => state.filterProjects);
    const cancelFilter = useStore((state) => state.cancelFilter);


    const [filters, setFilters] = useState({
        completed: false,
        inProgress: false,
        notStarted: false
    })

    const [isDropdownVisible, setIsDropdownVisible] = useState(false)

    function handleChange({ target }) {
        filterProjects(null, target.value)
        if (target.value == "") {
            cancelFilter()
        }
    }

    function showDropdown() {
        setIsDropdownVisible(!isDropdownVisible);
        if (isDropdownVisible == true) {
            console.log("fgikisfdsfdsaddsa")
            cancelFilter()
            setFilters({
                completed: false,
                inProgress: false,
                notStarted: false

            })
        }
    }
        function handleDropdownChange(event) {
            const { id, checked } = event.target
            if (id == "completed") {
                setFilters({ completed: true, inProgress: false, notStarted: false })
            }
            if (id == "inProgress") {
                setFilters({ completed: false, inProgress: true, notStarted: false })
            }
            if (id == "notStarted") {
                setFilters({ completed: false, inProgress: false, notStarted: true })
            }


        }

        return (
            <div className="relative w-[50%]">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-4xl bg-emerald-100 dark:placeholder-gray-400 dark:text-gray"
                        placeholder="Search"
                        onChange={handleChange}
                    />
                    <button
                        className="flex items-center gap-1 text-white absolute end-2.5 bottom-2.5 bg-slate-400 hover:bg-slate-500  font-medium rounded-lg text-sm px-3 py-2"
                        onClick={showDropdown}
                    >
                        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                        Filtrar
                    </button>
                    {isDropdownVisible && (
                        <ul className="absolute top-0 right-0 mt-2 w-52 rounded-lg bg-slate-400 mt-10 z-10">
                            <li className="flex gap-2 py-1 px-2 border-b mx-3 border-slate-700">
                                <input
                                    id="completed"
                                    type="radio"
                                    value="completed"
                                    checked={filters.completed}
                                    onChange={handleDropdownChange}
                                />
                                <label htmlFor="completed">Completado</label>
                            </li>
                            <li className="flex gap-2 py-1 px-2 border-b mx-3 border-slate-700">
                                <input
                                    id="inProgress"
                                    type="radio"
                                    value="inProgress"
                                    checked={filters.inProgress}
                                    onChange={handleDropdownChange}
                                />
                                <label htmlFor="inProgress">En proceso</label>
                            </li>
                            <li className="flex gap-2 py-1 px-2 mx-3">
                                <input
                                    id="notStarted"
                                    type="radio"
                                    value="notStarted"
                                    checked={filters.notStarted}
                                    onChange={handleDropdownChange}
                                />
                                <label htmlFor="notStarted">Sin iniciar</label>
                            </li>
                            <div className='flex justify-center'>
                                <button className='bg-slate-500 rounded-lg p-1 mb-1 text-white cursor-pointer' onClick={() => filterProjects(filters)}>Aceptar</button>
                            </div>
                        </ul>
                    )}
                </div>
            </div>
        );
    }
