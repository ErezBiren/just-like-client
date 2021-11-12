import { createSlice } from "@reduxjs/toolkit";
import { IDepartment, IUser, Priority, MissionStatus, UserStatus, ISubsribersData } from "./models";

export interface IDashboardState {
    subscribers: ISubsribersData[];
    departments: IDepartment[];
    selectedDepartment?: IDepartment;
    users: IUser[];
}

export const initialState: IDashboardState = {
    selectedDepartment: undefined,
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
    users: [{ id: "1", email: "aa@gmail.co.il", fullName: "a a ", linkedin: "https://www.linkedin.com/in/erezbirenholz/", status: UserStatus.InActive, category: "aa", subscribedDate: new Date() },
    { id: "2", email: "aa@gmail.co.il", fullName: "a a ", linkedin: "https://www.linkedin.com/in/erezbirenholz/", status: UserStatus.Active, category: "aa", subscribedDate: new Date() }],
    subscribers: [
        {
            id: "1",
            title: "מתנדבים",
            amount: 290,
            percentage: 100,
        },
        {
            id: "2",
            title: "ג'וניורים",
            amount: 320,
            percentage: 10,
        },
        {
            id: "3",
            title: "אפרוחים",
            amount: 750,
            percentage: 50,
        }]

};

// todo: change this to false

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {

    },
});

export const dashActions = dashboardSlice.actions;
export default dashboardSlice.reducer;