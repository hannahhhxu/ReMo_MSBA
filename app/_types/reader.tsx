import type { Classes } from "./classes";
import type { Client } from "./client";
import type { Educator } from "./educator";
import type { Library } from "./library";

interface ServiceHistory {
  action: string;
  date: string;
  name: string;
  type: string;
}
export interface SurveyAnswerHistory {
  answer?: string;
  value?: number;
  updated: string;
}

export interface ReadingGoalsHistory {
  valueText?: string;
  valueNumber?: number;
  updated: string;
}

export interface ReadingGoals {
  category: string;
  heading: string;
  questionId: string;
  prompt: string;

  goalCollection?: string;
  goalProperty?: string;
  goalPropertyValue?: string;
  goalValueText?: string;
  goalValueNumber?: number;
  goalType: "total" | "daily" | "weekly" | "semester" | "summer" | "text";

  history?: ReadingGoalsHistory[];
  updated?: string;
}

export interface SurveyHistory {
  answer: string;
  value: number;
  category: string;
  heading: string;
  questionId: string;
  prompt: string;
  frequency?: string;
  history?: SurveyAnswerHistory[];
  required_date: string;
  updated: string;
}

interface TestingHistory {
  date: string;
  gradeLevelStatus: string;
  lexileMax: string;
  lexileMin: string;
  name: string;
  progress: string;
  result: string;
}

export interface Reader {
  _id: string;
  classes?: Classes[];
  clients?: Client[];
  educators?: Educator[];
  created?: Date;
  displayName?: string;
  dob?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  ethnicity?: string;
  gender?: string;
  gradeLevel?: string;
  pronouns?: string;
  ssid?: string;
  servicesHistory?: ServiceHistory[];
  surveyHistory?: SurveyHistory[];
  testingHistory?: TestingHistory[];
  readingGoals?: ReadingGoals[];
  libraries?: Library[];
  isActive?: boolean;
  isEducator?: boolean;
  onboardingComplete?: { [id: string]: boolean };
  updated?: Date;
}
