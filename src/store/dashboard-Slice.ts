import { createSlice } from "@reduxjs/toolkit";
import { Department, User, SubsribersData, Notification } from "./models";
import { mockedInitialState, isMockedData } from "./mockedInitialState"

export interface DashboardState {
    subscribers: SubsribersData[];
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
        subscribers: []
    };
}

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