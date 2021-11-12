
export enum Priority {
    None,
    High,
}

export enum MissionStatus {
    InProgress,
    completed,
}

export enum UserStatus {
    InActive,
    Active,
}

export interface IMission {
    id: string;
    title: string;
    priority: Priority;
    dueDate: Date;
    status: MissionStatus;
    participents?: IUser[];
}

export interface IProject {
    id: string;
    completed: number;
    percentage: number;
    name: string;
    total: number;
    missions: IMission[];
}

export interface INotification {
    id: string;
    text: string;
    dataTime: Date;
}

export interface IDepartment {
    id: string;
    name: string;
    color: string;
    projects: IProject[];
}

export interface IUser {
    subscribedDate: any;
    category?: string;
    id: string;
    fullName: string;
    email?: string;
    linkedin?: string;
    status: UserStatus;
}

export interface ISubsribersData {
    id: string;
    title: string;
    amount: number;
    percentage: number;
}