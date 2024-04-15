import StickyWrapper from "@/components/sticky-wrapper"
import Header from "./header"
import FeedWrapper from "@/components/feed-wrapper"
import UserProgress from "@/components/user-progress"
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import Unit from "./Unit"

const learnPage = async () => {
  const userProgress = await getUserProgress()
  const units = await getUnits()
  const courseProgress = await getCourseProgress();
  const lessonPercentage = await getLessonPercentage()

  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses")
  }

  if(!courseProgress){
    redirect('/courses')
  }

  return (
    <div className="flex flex-row-reverse gap-x-2 h-full p-4 pt-0 relative">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header lang={userProgress.activeCourse.title}/>
        {units.map((unit)=>{
          return(<div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={courseProgress.activeLesson}
              activeLessonPercentage={lessonPercentage}
              />
          </div>)
        })}
      </FeedWrapper>
    </div>
  )
}
export default learnPage