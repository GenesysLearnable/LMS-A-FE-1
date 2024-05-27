import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useCourseStore = create(
  persist(
    (set) => ({
      course: [],
      setCourse: (course) => set({ course }),
      fetchCourse: async (email) => {
        try {
          const res = await fetch(
            `http://localhost:9500/api/v1/courses/${email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          const data = await res.json()
          console.log(data)
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
        state.fetchCourse(state.email) // Pass the email stored in the state
      },
    }
  )
)

export default useCourseStore
