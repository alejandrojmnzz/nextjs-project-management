import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

export function TasksGraph() {
const options = {}

const data = {
    labels: ["Completado", "En progreso", "Sin iniciar"],
    datasets: [
        {
            label: "Tareas",
            data: [90, 20, 20],
            backgroundColor: [
                "rgb(39, 235, 0)",
                "rgb(255, 188, 44)",
                "rgb(255, 0, 0)"

            ]
        }
    ]
}

    return(
        <div className="w-92 mt-3">
            <Pie options={options} data={data}/>
        </div>
    )
}