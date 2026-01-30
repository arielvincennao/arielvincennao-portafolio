export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'language' | 'framework' | 'database' | 'tool';
}
