import { dashboardActions } from "./dashboard-Slice";
import { User } from "./models";
import { AppDispatch } from "./store";


//const baseUrl = process.env.REACT_APP_BACKEND_URL;
const baseUrl = 'http://localhost:3001'; // todo : take if from env


export const getUsers = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(baseUrl + "/users");

    if (response.ok) {
      const users = await response.json();
      console.log(users);

      users.forEach((user: User) => {
        dispatch(dashboardActions.addUser(user));
      });
    }
  };
};
