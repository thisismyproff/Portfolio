import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    projectUrl: string;
    description: string;
    tags: Tag[];
    pictures: string[]; 

}