import { createSlice } from "@reduxjs/toolkit";

export interface IProject {
    completed: Number;
    percentage: Number;
    name: String;
}

export interface IDepartment {
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
            name: "מחלקת עיצוב",
            color: "#5c3153",
            projects: [
                { name: "aa", completed: 5, percentage: 100 },
                { name: "bb", completed: 5, percentage: 30 },
                { name: "ccc", completed: 5, percentage: 53 },
            ],
        },
        {
            name: "מחלקת הדרכות",
            color: "#C73CA8",
            projects: [
                { name: "aa", completed: 25, percentage: 60 },
                { name: "bb", completed: 15, percentage: 30 },
                { name: "ccc", completed: 45, percentage: 100 },
            ],
        },
        {
            name: "מחלקת ניהול קהילה",
            color: "#3CC73C",
            projects: [
                { name: "aa", completed: 2, percentage: 100 },
                { name: "ccc", completed: 4, percentage: 63 },
            ],
        },

    ]
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
