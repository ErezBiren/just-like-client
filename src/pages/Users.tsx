import classes from "./Users.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "fullName",
    headerName: "שם מלא",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "אימייל",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "linkedin",
    headerName: "פרופיל לינקדאין",
    type: "number",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "dateSubscribed",
    headerName: "נרשם בתאריך",
    type: "number",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "category",
    headerName: "קטגוריה",
    type: "number",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "סטטוס",
    type: "number",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "activity",
    headerName: "פעילות",
    type: "number",
    width: 150,
    editable: true,
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
    status: "פעיל",
  },
  {
    id: 3,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
  },
  {
    id: 4,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
  },
  {
    id: 5,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
  },
  {
    id: 6,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
  },
  {
    id: 7,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
  },
  {
    id: 8,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
  },
  {
    id: 9,
    fullName: "ישראל ישראלי",
    email: "israel@gmail.com",
    linkedin: "https://www.linkedin.com/in/israel/",
    dateSubscribed: "12/11/2021",
    category: "מנהל משימות",
    status: "פעיל",
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
