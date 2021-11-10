import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IMission } from "../../store/models";
import CircleIcon from "@mui/icons-material/Circle";

const columns: GridColDef[] = [
  {
    field: "title",
    renderCell: (cellValues) => {
      return (
        <div>
          {/* <CircleIcon /> */}
          {cellValues.row.title}
        </div>
      );
    },
    headerName: "תיאור",
    width: 350,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  // {
  //   field: "title",
  //   headerName: "תיאור",
  //   width: 350,
  //   editable: true,
  //   align: "center",
  //   headerAlign: "center",
  // },
  {
    field: "status",
    headerName: "סטטוס",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "dueDate",
    headerName: "תאריך יעד",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "priority",
    headerName: "עדיפות",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "participents",
    headerName: "משתתפים",
    type: "number",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

interface MissionDataParams {
  missions: IMission[];
}

function MissionTable(props: MissionDataParams) {
  const [missions, setMissions] = useState<any[]>([]);

  useEffect(() => {
    const newMissions = props.missions.map((m) => ({
      id: m.id,
      title: m.title,
      status: m.status.toString(),
      dueDate: m.dueDate.toString(),
      priority: m.priority.toString(),
      users: m.participents?.length,
    }));

    setMissions(newMissions);
  }, [props.missions]);

  return (
    <div>
      <DataGrid
        autoHeight
        rows={missions}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}

export default MissionTable;
