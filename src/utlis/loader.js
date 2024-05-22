import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useCourseStore = create(
  persist(
    (set) => ({
      course: [],
      setCourse: (course) => set({ course }),
      fetchCourse: async () => {
        try {
          const res = await fetch("http://localhost:8080/api/v1/courses", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          const data = await res.json()
          set({ course: data })
        } catch (error) {
          console.error("Error fetching courses:", error)
        }
      },
    }),
    {
      name: "course-storage", // Name of the item in storage
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        // Always fetch the latest data on rehydrate
        state.fetchCourse()
      },
    }
  )
)

export default useCourseStore
