import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDepartment, Priority, Status } from "./models";

export interface IDashboardState {
    departments: IDepartment[];
    selectedDepartment?: IDepartment;
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
                            status: Status.InProgress,
                            title: "לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה",
                            dueDate: new Date(),
                            priority: Priority.High,
                            participents: [{ id: "1" }]
                        },
                        {
                            id: "2",
                            status: Status.completed,
                            title: "לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה",
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
    reducers: {
        // selectDepartment: (
        //   state: IDashboardState,
        //   action: PayloadAction<string>
        // ) => {
        //   state.selectedDepartment = state.departments.find(
        //     (d) => d.id === action.payload
        //   );
        // },
    },
});

export const dashActions = dashboardSlice.actions;
export default dashboardSlice.reducer;