import type { ReactNode } from "react";
import type { CourseGoalsListProps } from "../interfaces/CommonInterfaces"
import CourseGoal from "./CourseGoal.tsx"
import InfoBox from "./InfoBox.tsx"


export default function CourseGoalsList({ goals, onDeleteGoal }: CourseGoalsListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">No goals found.</InfoBox>;
    }

    let warning: ReactNode;

    if (goals.length > 4) {
        warning = <InfoBox mode="warning" severity="medium">You have quite a few goals! Consider removing some.</InfoBox>;
    }

    return (
        <>
            {warning}
            <ul>
                {goals.map((goal) => {
                    return (
                        <li key={goal.id}>
                            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal} >
                                <p>{goal.description}</p>
                            </CourseGoal>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}