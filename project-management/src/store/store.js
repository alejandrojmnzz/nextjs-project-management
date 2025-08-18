import { create } from 'zustand'
import data from "@/database/data.json"

export const useStore = create((set, get) => ({
  modal: false,
  filteredProjects: { filtering: false, projects: [] },

  toggleModal: () => {
    set({ modal: !get().modal })
  },

  filterProjects: (filters, text) => {
    if (text) {
      if (text.trim() == "") {
        set({ filteredProjects: { filtering: false } })
        console.log(get().filteredProjects)
      } else {
        let filtered = data.projects.filter((item) => item.title.toLowerCase().includes(text))
        set({ filteredProjects: { filtering: true, projects: filtered } })
        console.log(get().filteredProjects)
      }
    }
    if (filters) {
      if (filters.completed) {
        let filtered = data.projects.filter((item) => item.status == "Completado")
        set({ filteredProjects: { filtering: true, projects: filtered } })
      }
      if (filters.inProgress) {
        let filtered = data.projects.filter((item) => item.status == "En proceso")
        set({ filteredProjects: { filtering: true, projects: filtered } })
        console.log(filteredProjects)
      }
      if (filters.notStarted) {
        let filtered = data.projects.filter((item) => item.status == "Sin iniciar")
        set({ filteredProjects: { filtering: true, projects: filtered } })
        console.log(filteredProjects)
      }

    }

  },
  cancelFilter: () => {
      set({ filteredProjects: { filtering: false } })
  }
}))
