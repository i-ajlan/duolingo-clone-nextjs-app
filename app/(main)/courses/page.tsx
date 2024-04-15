import { getCourses, getUserProgress } from "@/db/queries"
import List from "./List"

const CoursesPage = async () => {
    const courses = await getCourses()
    const userProgress = await getUserProgress()


    return (
    <div className="mx-auto container p-6">
        <h2 className="font-bold text-lg">Courses</h2>
        <List
            courses={courses}
            activeCourseId={userProgress?.activeCourseId}
            />
    </div>
  )
}
export default CoursesPage