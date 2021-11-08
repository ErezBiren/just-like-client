import classes from "./Users.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "fullName",
    headerName: "שם מלא",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "אימייל",
    width: 150,
    editable: true,
  },
  {
    field: "linkedin",
    headerName: "פרופיל לינקדאין",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "dateSubscribed",
    headerName: "נרשם בתאריך",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "category",
    headerName: "קטגוריה",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "סטטוס",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "activity",
    headerName: "פעילות",
    type: "number",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    fullName: "Roxie",
    email: "Harvey",
    linkedin: "65",
    dateSubscribed: "1.1.1",
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
