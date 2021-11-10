import classes from "./Users.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
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
  },
  {
    field: "linkedin",
    headerName: "פרופיל לינקדאין",
    type: "number",
    width: 150,
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
    headerName: "פעילות",
    type: "number",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [
  {
    id: 1,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
  },
  {
    id: 2,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל לא",
  },
];

function Users() {
  return (
    <div className={classes.root}>
      <h2>מאגר רשומים</h2>
      <div className={classes.dataGrid}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default Users;
