import { createSlice } from "@reduxjs/toolkit";
import { Department, User, Notification, UserCategory } from "./models";
import { mockedInitialState, isMockedData } from "./mockedInitialState"

export interface DashboardState {
    departments: Department[];
    notifications: Notification[];
    selectedDepartment?: Department;
    users: User[];
}

export let initialState: DashboardState;

if (isMockedData) {
    initialState = mockedInitialState;
}
else {
    initialState = {
        selectedDepartment: undefined,
        notifications: [],
        departments: [],
        users: [],
    };
}

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        addUser: (state: DashboardState, action) => {
            const exists = state.users.some((user) => user.id === action.payload.id);
            if (!exists) {
                state.users.push({ ...action.payload, category: convertStringToCategory(action.payload.category) });
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

function convertStringToCategory(category: string) {
    switch (category.toLowerCase()) {
        case "volunteer":
            return UserCategory.Volunteer;
        case "chick":
            return UserCategory.Chick;
        case "junior":
            return UserCategory.Junior;
    }
}
