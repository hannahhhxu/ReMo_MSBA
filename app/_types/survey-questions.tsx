export interface SurveyQuestion {
  __typename?: string;
  questionId: string;
  value: number;
  updated: Date;
}

export interface SurveyQuestionCluster {
  category: string;
  heading: string;
  questionIds: string[];
}

export interface SurveyQuestionData {
  questionId: string;
  icon?: JSX.Element;
  prompt: string;
  answers: string[];
  values: number[];
  frequency: "weekly" | "monthly" | "once" | "semester";
}
