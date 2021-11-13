import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Mission, Priority, MissionStatus } from "../../store/models";
import { AvatarGroup, Modal } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import MissionDetails from "./MissionDetails";
import AddIcon from "@mui/icons-material/Add";

const columns: GridColDef[] = [
  {
    field: "title",
    renderCell: (cellValues) => {
      return (
        <div>
          <li style={{ color: "#fadaf" }}>
            <span style={{ color: "#fadsf" }}>{cellValues.row.title}</span>
          </li>
        </div>
      );
    },
    headerName: "תיאור",
    width: 450,
    editable: true,
    align: "left",
    headerAlign: "center",
  },
  // {
  //   field: "status",
  //   headerName: "סטטוס",
  //   width: 150,
  //   editable: true,
  //   align: "center",
  //   headerAlign: "center",
  // },
  {
    field: "dueDate",
    headerName: "תאריך יעד",
    renderCell: () => <div>נותרו 3 ימים</div>,
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "priority",
    headerName: "עדיפות",
    renderCell: (cellValues) => {
      return cellValues.row.priority == Priority.High ? (
        <StarIcon sx={{ color: "#E32F2F" }} />
      ) : (
        <StarIcon sx={{ color: "#3CC73C" }} />
      );
    },
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "participents",
    headerName: "משתתפים",
    renderCell: (cellValues) => {
      return (
        <div>
          <AvatarGroup max={3}>
            <Avatar>
              <AddIcon />
            </Avatar>
            <Avatar sx={{ bgcolor: "#E5BB69" }}>נב</Avatar>
            <Avatar sx={{ bgcolor: "#E569E0" }}>עש</Avatar>
            <Avatar sx={{ bgcolor: "#69E5C0" }}>מג</Avatar>
            <Avatar sx={{ bgcolor: "#69B1E5" }}>מג</Avatar>
          </AvatarGroup>
        </div>
      );
    },
    type: "number",
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

interface MissionsTableDataParams {
  missions: Mission[];
}

function MissionsTable(props: MissionsTableDataParams) {
  const [missions, setMissions] = useState<any[]>([]);

  const [open, setOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState<Mission>({
    id: "",
    title: "",
    priority: Priority.None,
    dueDate: new Date(),
    status: MissionStatus.InProgress ,
  });

  const handleDoubleClick = (e: GridCellParams) => {
    console.log(JSON.stringify(e));

    setSelectedMission(missions.find((m) => m.id == e.row.id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const newMissions = props.missions?.map((m) => ({
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
        onCellDoubleClick={handleDoubleClick}
      />
      <Modal open={open} onClose={handleClose}>
        <MissionDetails
          mission={selectedMission}
          onClose={handleClose}
        ></MissionDetails>
      </Modal>
    </div>
  );
}

export default MissionsTable;
