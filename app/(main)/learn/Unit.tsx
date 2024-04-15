import { lessons, units } from "@/db/schema"
import UnitBanner from "./UnitBanner";
import LessonButton from "./lesson-button";

type Props = {
    id: number,
    order:number,
    title: string,
    description: string,
    lessons: (typeof lessons.$inferSelect & {completed: boolean})[];
    activeLesson: (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
    }) | undefined,
    activeLessonPercentage: number,
}

const Unit = ({
    id,
    order,
    title,
    description,
    lessons,
    activeLesson,
    activeLessonPercentage
}:Props) => {
  return (
    <div>
        <UnitBanner title={title} description={description}/>
        <div className="flex flex-col items-center">

        {lessons.map((lesson,index)=>{
          const isCurrent = lesson.id === activeLesson?.id
          const isLocked = !lesson.completed && !isCurrent
          return( <LessonButton
            key={lesson.id}
            id={lesson.id}
            index={index}
            totalCount={lessons.length-1}
            current={true || isCurrent}
            locked={isLocked}
            percentage={activeLessonPercentage}
          />)
        })}
        </div>
    </div>
  )
}
export default Unit