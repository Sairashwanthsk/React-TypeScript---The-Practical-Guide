import Header from "./components/Header.tsx"
import goalsImg from './assets/hero.png'
import { useState } from "react"
import { type CourseGoalInterface } from "./interfaces/CommonInterfaces.tsx";
import CourseGoalsList from "./components/CourseGoalsList.tsx";
import NewGoalForm from "./components/NewGoalForm.tsx";

function App() {
  const [goals, setGoals] = useState<CourseGoalInterface[]>([]);


  function handdleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalInterface = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'List of Goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoalForm onAddGoal={handdleAddGoal} />
      <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App
