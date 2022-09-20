export interface Course {
  id: string;
  title: string;
  price: number;
  instructor: string;
  image: string;
  rating: number;
  description: string;
  language: string;
  category: string;
  learnings: Learning[] | [];
  requirements: Requirement[] | [];
  level: string;
  students: number;  
  subTitle: string;
  lastUpdated: Date;
}

export interface Learning {
  id: number;
  name: string;
}

export interface Requirement {
  id: number;
  name: string;
}
