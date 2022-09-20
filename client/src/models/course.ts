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
  learnings: string[] | [];
  requirements: string[] | [];
  level: string;
  students: number;  
  subTitle: string;
  lastUpdated: Date;
}
