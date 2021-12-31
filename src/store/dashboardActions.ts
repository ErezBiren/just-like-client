import { dashboardActions } from "./dashboard-Slice";
import { Department, User } from "./models";
import { AppDispatch } from "./store";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getUsers = () => {
  return async (dispatch: AppDispatch) => {

    const response = await fetch(baseUrl + "/users");

    if (response.ok) {
      const users = await response.json();

      users.documents?.forEach((doc: any) => {

        const user: User = {
          firstName: "",
          lastName: ""
        };


        try {

          const fields = doc.fields;

          for (const [key, value] of Object.entries(fields)) {
            user[key as keyof User] = fields[key]["stringValue"];
          }
        } catch (err) {
          console.log(err)
        }
        dispatch(dashboardActions.addUser(user));
      });
    }
  };
};

export const getDepartments = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(baseUrl + "/departments");

    if (response.ok) {
      //   const departments = await response.json();
      //   console.log(departments);

      //   departments.forEach((department: Department) => {
      //     dispatch(dashboardActions.addDepartment(department));
      //   });
    }
  };
};


