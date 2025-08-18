'use client'
import { Bar } from "react-chartjs-2"
import projectsData from "@/database/data.json"
import { useEffect, useState } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export function ProjectsGraph() {

    const [projectsTasks, setProjectsTasks] = useState([])
    const [projectsTitles, setProjectsTitles] = useState([])

    const options = {
        scales: {
            y: {
                beginAtZero: false, 
                min: 0, 
                max: 14
            }
        }
    }
    const data = {
        labels: projectsTitles,
        datasets: [
            {
                label: "Tareas completadas",
                data: projectsTasks,
                backgroundColor: ["oklch(0.91 0.09 163.85)"],
                borderColor: ["rgba(100, 0, 0, 1)"],
                borderWidth: 1
               
            }
        ]
    }

    useEffect(() => {
        let tasksArray = []
        let titlesArray = []
        for (let i = 0; i < projectsData.projects?.length; i++) {
            titlesArray.push(projectsData.projects[i]?.title)
            tasksArray.push(projectsData.projects[i]?.tasks?.filter((item) => item.status == "Completado").length)

        }
        console.log(tasksArray)
        setProjectsTitles(titlesArray)
        setProjectsTasks(tasksArray)
    }, [])

    return (
        <>
            <div className="w-200 ">
                <Bar options={options} data={data} />
            </div>
        </>
    )
}