export enum ProjectType{
    "Library"=0,
    "Webapps"=1,
    "Templates"=2,
    "Components"=3
};
export interface Project{
    name: string;
    description: string;
    type: ProjectType;
    repository: string;
    url?: string;
    
};