import { createSlice } from "@reduxjs/toolkit";

export interface IProject {
    completed: Number;
    percentage: Number;
    name: String;
    total: number;
}

export interface IDepartment {
    id: string;
    name: string;
    color: string;
    projects: IProject[];
}

export interface IDashboardState {
    departments: IDepartment[];
}

export const initialState: IDashboardState = {
    departments: [
        {
            id: "1",
            name: "מחלקת עיצוב",
            color: "#699BE5",
            projects: [
                { name: "aa", total: 10, completed: 5, percentage: 100 },
                { name: "bb", total: 20, completed: 5, percentage: 30 },
                { name: "ccc", total: 50, completed: 5, percentage: 53 },
            ],
        },
        {
            id: "2",
            name: "מחלקת הדרכות",
            color: "#37CD58",
            projects: [
                { name: "aa", total: 70, completed: 25, percentage: 60 },
                { name: "bb", total: 60, completed: 15, percentage: 30 },
                { name: "ccc", total: 70, completed: 45, percentage: 100 },
            ],
        },
        {
            id: "3",
            name: "מחלקת ניהול קהילה",
            color: "#FDBC4E",
            projects: [
                { name: "aa", total: 100, completed: 2, percentage: 100 },
                { name: "ccc", total: 70, completed: 4, percentage: 63 },
            ],
        },
        {
            id: "4",
            name: "מחלקת אסטרטגיה",
            color: "#C73CA8",
            projects: [
                { name: "aa", total: 100, completed: 2, percentage: 100 },
                { name: "ccc", total: 100, completed: 4, percentage: 63 },
            ],
        },
        // {
        //     id: "5",
        //     name: "מחלקת אסטרטגיה",
        //     color: "#C73CA8",
        //     projects: [
        //         { name: "aa", total: 100, completed: 2, percentage: 100 },
        //         { name: "ccc", total: 100, completed: 4, percentage: 63 },
        //     ],
        // },
        // {
        //     id: "6",
        //     name: "מחלקת אסטרטגיה",
        //     color: "#C73CA8",
        //     projects: [
        //         { name: "aa", total: 100, completed: 2, percentage: 100 },
        //         { name: "ccc", total: 100, completed: 4, percentage: 63 },
        //     ],
        // },
    ],
};

// todo: change this to false

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
});

export const dashActions = dashboardSlice.actions;
export default dashboardSlice.reducer;