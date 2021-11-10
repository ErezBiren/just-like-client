export enum Priority {
    None,
    High,
}

export enum Status {
    InProgress,
    completed,
}

export interface IMission {
    id: string;
    title: string;
    priority: Priority;
    dueDate: Date;
    status: Status;
    participents?: IUser[];
}

export interface IProject {
    id: string;
    completed: Number;
    percentage: Number;
    name: String;
    total: number;
    missions: IMission[];
}

export interface IDepartment {
    id: string;
    name: string;
    color: string;
    projects: IProject[];
}

export interface IUser {
    id: string;
}