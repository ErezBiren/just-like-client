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

export enum UserCategory {
  None,
  Volunteer,
  Chick,
  Junior,
}

export interface Mission {
  id: string;
  title: string;
  priority: Priority;
  dueDate: Date;
  status: MissionStatus;
  participents?: User[];
}

export interface Project {
  id: string;
  completed: number;
  percentage: number;
  name: string;
  total: number;
  missions: Mission[];
}

export interface Notification {
  id: string;
  text: string;
  dataTime: Date;
  userId: string;
}

export interface Department {
  id: string;
  name: string;
  color: string;
  projects: Project[];
}

export interface User {
  category?: UserCategory;
  id?: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  email?: string;
  phone?: string;
  password?: string;
  linkedin?: string;
  status?: UserStatus;
  domain?: string;
  photoURL?: string;
  accessToken?: string;
  userType?: string;
  interest?: string;
  speciality?: string;
  createTime?: Date;
}

export interface SubsribersData {
  id: string;
  title: string;
  amount: number;
  percentage: number;
}
