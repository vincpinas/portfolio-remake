export interface ParsedProject {
  id: number;
  title: string;
  date?: string | number | Date;
  introduction: string;
  status: number;
  images?: string[];
  description: string;
  learned: string;
  links: { github: string; live: string; };
  skills: string[];
  categories: string[];
  team: string;
}