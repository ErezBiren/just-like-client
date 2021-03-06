import MoreIcon from "../assets/dashboard/more-horizontal.svg?component";
import { Link } from "@material-ui/core";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getUsers } from "../store/dashboardActions";
import { User, UserCategory, UserStatus } from "../store/models";
import { RootState } from "../store/store";
import classes from "./Users.module.css";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "fullName",
    headerName: "שם מלא",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "אימייל",
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (cellValues: any) => {
      return (
        <Link href={`mailto:${cellValues.row.email}`}>
          {cellValues.row.email}
        </Link>
      );
    },
  },
  {
    field: "linkedin",
    renderCell: (cellValues: any) => {
      return (
        <Link target="_blank" href={`${cellValues.row.linkedin}`}>
          {cellValues.row.linkedin}
        </Link>
      );
    },
    headerName: "פרופיל לינקדאין",
    type: "number",
    width: 220,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "dateSubscribed",
    headerName: "נרשם בתאריך",
    type: "number",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "category",
    headerName: "קטגוריה",
    type: "number",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "domain",
    headerName: "תחום התמחות",
    type: "string",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    renderCell: (cellValues: any) => {
      return (
        <div
          className={classes.status}
          style={{
            background:
              cellValues.row.status === "פעיל" ? "#3CC73C25" : "#D92D2025",
            color: cellValues.row.status === "פעיל" ? "#3CC73C" : "#D92D20",
          }}
        >
          {cellValues.row.status}
        </div>
      );
    },
    headerName: "סטטוס",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "activity",
    renderCell: () => {
      return <MoreIcon />;
    },
    headerName: "פעילות",
    type: "number",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.dashboard.users);

  const [rows, setRows] = useState<User[]>([]);

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);

  useEffect(() => {
    const newUsers = users?.map((m) => ({
      id: m.id,
      fullName: m.displayName,
      email: m.email,
      linkedin: m.linkedin,
      dateSubscribed: Moment(m.createTime).format("L"),
      category: m.category ? categoryToString(m.category) : "",
      domain: m.domain,
      status: m.status === UserStatus.Active ? "פעיל" : "פעיל לא",
    }));

    setRows(newUsers);
  }, [users]);

  return (
    <div className={classes.root}>
      <h2>מאגר רשומים</h2>
      <div className={classes.dataGrid}>
        {users && (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        )}
      </div>
    </div>
  );
};

export default Users;

function categoryToString(category: UserCategory): string | undefined {
  switch (category) {
    case UserCategory.Volunteer:
      return "מתנדב";
    case UserCategory.Chick:
      return "אפרוח";
    case UserCategory.Junior:
      return "ג'וניור";
  }
}
