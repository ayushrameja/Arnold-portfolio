export type Project = {
  id: number;
  title: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  skills: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  highlights: string[];
};
