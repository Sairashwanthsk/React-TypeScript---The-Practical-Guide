import type { PropsWithChildren } from "react"

export type HeaderProps = PropsWithChildren<{ image: { src: string, alt: string } }>;

export type CourseGoalProps = PropsWithChildren<{ title: string; id: number; onDelete: (id: number) => void }>;

export interface CourseGoalInterface {
    title: string;
    description: string;
    id: number;
}

export interface CourseGoalsListProps {
    goals: CourseGoalInterface[];
    onDeleteGoal: (id: number) => void;
}

export interface NewGoalFormProps {
    onAddGoal: (goal: string, summary: string) => void;
}

export type HintBoxProps = PropsWithChildren<{mode: 'hint'}>;

export type WarningBoxProps = PropsWithChildren<{mode: 'warning'; severity: 'low' | 'medium' | 'high'}>;

export type InfoBoxProps = HintBoxProps | WarningBoxProps;