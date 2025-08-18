'use client'
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useEffect, useState} from "react";

ChartJS.register(ArcElement, Tooltip, Legend)

export function TasksGraph({tasks}) {
const [tasksStatus, setTasksStatus] = useState([])

const options = {}

const data = {
    labels: ["Completado", "En progreso", "Sin iniciar"],
    datasets: [
        {
            label: "Tareas",
            data: tasksStatus,
            backgroundColor: [
                "rgb(39, 235, 0)",
                "rgb(255, 188, 44)",
                "rgb(255, 0, 0)"

            ]
        }
    ]
}

    useEffect(() => {
        if (tasks) {

            let completedTasks = 0
            let inProgressTasks = 0
            let notStartedTasks = 0
            for(let i = 0; i <= tasks.length; i++) {
                if (tasks[i]?.status == "Completado") {
                    completedTasks += 1
                }
                if (tasks[i]?.status == "En proceso") {
                    inProgressTasks += 1
                }
                if (tasks[i]?.status == "Sin iniciar") {
                    notStartedTasks += 1
                }
            }
            setTasksStatus([completedTasks, inProgressTasks, notStartedTasks])
        }

    }, [tasks])

    return(
        <div className="w-92 mt-3">
            <Pie options={options} data={data}/>
        </div>
    )
}