import { createSlice } from "@reduxjs/toolkit";
import { Department, User, Priority, MissionStatus, UserStatus, SubsribersData, Notification } from "./models";

export interface DashboardState {
    subscribers: SubsribersData[];
    departments: Department[];
    notifications: Notification[];
    selectedDepartment?: Department;
    users: User[];
}

export let initialState: DashboardState;

const mockData = false;

if (mockData) {
    initialState = {
        selectedDepartment: undefined,
        notifications: [
            {
                id: "1",
                text: "טל בראל רוצה להירשם לאפרוחיה",
                dataTime: new Date(),
                user: {
                    subscribedDate: new Date(),
                    category: "פיתוח",
                    id: "1",
                    fullName: "טל בראל",
                    email: "talbarel@gmail.com",
                    linkedin: "linkedin.com\talbarel",
                    status: UserStatus.Active,
                }
            },
            {
                id: "2",
                text: "ליאור כהן רוצה להירשם לאפרוחיה",
                dataTime: new Date(),
                user: {
                    subscribedDate: new Date(),
                    category: "פיתוח",
                    id: "1",
                    fullName: "טל בראל",
                    email: "talbarel@gmail.com",
                    linkedin: "linkedin.com\talbarel",
                    status: UserStatus.Active,
                }
            },
            {
                id: "3",
                text: "יונתן איינשטיין אישר השתתפות",
                dataTime: new Date(),
                user: {
                    subscribedDate: new Date(),
                    category: "פיתוח",
                    id: "1",
                    fullName: "טל בראל",
                    email: "talbarel@gmail.com",
                    linkedin: "linkedin.com\talbarel",
                    status: UserStatus.Active,
                }
            }
        ],
        departments: [
            {
                id: "1",
                name: "מחלקת עיצוב",
                color: "#699BE5",
                projects: [
                    {
                        id: "1",
                        name: "אקדמית הפניקס",
                        total: 10,
                        completed: 5,
                        percentage: 100,
                        missions: [
                            {
                                id: "1",
                                status: MissionStatus.InProgress,
                                title: "בניית תיק עבודות ",
                                dueDate: new Date(),
                                priority: Priority.High,
                                participents: [{ id: "1", email: "aa@aa.co.il", fullName: "a a ", linkedin: "aa", status: UserStatus.Active, subscribedDate: new Date() }]
                            },
                            {
                                id: "2",
                                status: MissionStatus.completed,
                                title: "התחלת עיצוב ארכיטקטורה",
                                dueDate: new Date(),
                                priority: Priority.High,
                            },
                        ],
                    },
                    {
                        id: "2",
                        name: "האפרוחיה",
                        total: 20,
                        completed: 5,
                        percentage: 30,
                        missions: [],
                    },
                    { id: "1", name: "ccc", total: 50, completed: 5, percentage: 53, missions: [] },
                ],
            },
            {
                id: "2",
                name: "מחלקת הדרכות",
                color: "#37CD58",
                projects: [
                    { id: "1", name: "aa", total: 70, completed: 25, percentage: 60, missions: [] },
                    { id: "2", name: "bb", total: 60, completed: 15, percentage: 30, missions: [] },
                    {
                        id: "3", name: "ccc",
                        total: 70,
                        completed: 45,
                        percentage: 100,
                        missions: [],
                    },
                ],
            },
            {
                id: "3",
                name: "מחלקת ניהול קהילה",
                color: "#FDBC4E",
                projects: [
                    { id: "1", name: "aa", total: 100, completed: 2, percentage: 100, missions: [] },
                    { id: "2", name: "ccc", total: 70, completed: 4, percentage: 63, missions: [] },
                ],
            },
            {
                id: "4",
                name: "מחלקת אסטרטגיה",
                color: "#C73CA8",
                projects: [
                    { id: "1", name: "aa", total: 100, completed: 2, percentage: 100, missions: [] },
                    { id: "2", name: "ccc", total: 100, completed: 4, percentage: 63, missions: [] },
                ],
            },


        ],
        users:
            [
                { id: "1", email: "aa@gmail.co.il", fullName: "Erez Birenholz", linkedin: "https://www.linkedin.com/in/erezbirenholz/", status: UserStatus.InActive, category: "aa", subscribedDate: new Date() },
                { id: "2", email: "aa@gmail.co.il", fullName: "Adi Sharon", linkedin: "https://www.linkedin.com/in/erezbirenholz/", status: UserStatus.Active, category: "aa", subscribedDate: new Date() },
                { id: "3", email: "aa@gmail.co.il", fullName: "Rachel Mulla", linkedin: "https://www.linkedin.com/in/erezbirenholz/", status: UserStatus.Active, category: "aa", subscribedDate: new Date() },
                { id: "4", email: "aa@gmail.co.il", fullName: "Meial Ben-Ami", linkedin: "https://www.linkedin.com/in/erezbirenholz/", status: UserStatus.Active, category: "aa", subscribedDate: new Date() },
            ],
        subscribers: [
            {
                id: "1",
                title: "מתנדבים",
                amount: 290,
                percentage: 29,
            },
            {
                id: "2",
                title: "ג'וניורים",
                amount: 320,
                percentage: 32,
            },
            {
                id: "3",
                title: "אפרוחים",
                amount: 750,
                percentage: 75,
            }]

    };
}
else {
    initialState = {
        selectedDepartment: undefined,
        notifications: [],
        departments: [],
        users: [],
        subscribers: []
    };
}

// todo: change this to false

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        addUser: (state: DashboardState, action) => {
            const exists = state.users.some((user) => user.id === action.payload.id);
            if (!exists) {
                state.users.push(action.payload);
            }
        },
        addDepartment: (state: DashboardState, action) => {
            const exists = state.departments.some((department) => department.id === action.payload.id);
            if (!exists) {
                state.departments.push(action.payload);
            }
        },
    },
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice.reducer;