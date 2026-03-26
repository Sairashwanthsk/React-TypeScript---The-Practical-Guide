import { useRef, type SubmitEvent } from "react";
import type { NewGoalFormProps } from "../interfaces/CommonInterfaces";

export default function NewGoalForm({onAddGoal}: NewGoalFormProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        onAddGoal(enteredGoal, enteredSummary);
        
        goal.current!.value = '';
        summary.current!.value = '';
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" id="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" ref={summary} />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    )
}