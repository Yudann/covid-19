
export interface Symptom {
  title: string;
  description: string;
  icon: string;
}

export interface PreventionStep {
  title: string;
  description: string;
  icon: string;
}

export interface StatData {
  label: string;
  value: string;
  color: string;
  description: string;
}

export interface ChartDataItem {
  name: string;
  cases: number;
}
