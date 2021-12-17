import { dashboardActions } from "./dashboard-Slice";
import { Department, User } from "./models";
import { AppDispatch } from "./store";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getUsers = () => {
  return async (dispatch: AppDispatch) => {

    const response = await fetch(baseUrl + "/users");

    if (response.ok) {
      const users = await response.json();

      console.log(users.documents);

      users.documents?.forEach((doc: any) => {

        const user: User = doc.fields;

        dispatch(dashboardActions.addUser(user));
      });
    }
  };
};

export const getDepartments = () => {
  return async (dispatch: AppDispatch) => {
    // const response = await fetch(baseUrl + "/departments");

    // if (response.ok) {
    //   const departments = await response.json();
    //   console.log(departments);

    //   departments.forEach((department: Department) => {
    //     dispatch(dashboardActions.addDepartment(department));
    //   });
    // }
  };
};


