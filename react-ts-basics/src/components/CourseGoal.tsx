import { type CourseGoalProps } from "../interfaces/CommonInterfaces.tsx"

export default function CourseGoal({ title, id, onDelete, children }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}