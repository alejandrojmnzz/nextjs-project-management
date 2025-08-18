'use client'
import '../styles/navbar.css'
import data from "@/database/data.json"
import Swal from "sweetalert2"
import { useState } from 'react'
import { Modal } from './Modal'
import { SearchBar } from './SearchBar'

export function Navbar() {
    return(
        <main className="bg-emerald-200 flex items-center justify-between py-7 navbar-shadow">
            <p className="text-5xl ps-4 text-gray-700 font-bold">Gestión de proyectos</p>
            <SearchBar />
            <Modal projectsGraph={true}/>
        </main >
    )}