export interface Project {
  id: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  description: string;
  technologies: string[];
  technologyColors: {
    [key: string]: {
      bg: string;
      text: string;
      border: string;
    };
  };
}
