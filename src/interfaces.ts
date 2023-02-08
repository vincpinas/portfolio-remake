export interface ParsedProject {
  id: number;
  title: string;
  introduction: string;
  status: number;
  img_src?: string;
  description: string;
  learned: string;
  links: { github: string; live: string; };
  skills: string[];
  categories: string[];
  team: string;
}