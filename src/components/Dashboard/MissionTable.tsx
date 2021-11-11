import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IMission } from "../../store/models";
import { AvatarGroup, Box, Modal, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";

const columns: GridColDef[] = [
  {
    field: "title",
    renderCell: (cellValues) => {
      return (
        <div>
          <li>{cellValues.row.title}</li>
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
    renderCell: (cellValues) => {
      return <div>נותרו 3 ימים</div>;
    },
    width: 150,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "priority",
    headerName: "עדיפות",
    renderCell: (cellValues) => {
      return cellValues.row.priority === 1 ? (
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

interface MissionDataParams {
  missions: IMission[];
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MissionTable(props: MissionDataParams) {
  const [missions, setMissions] = useState<any[]>([]);

  const [open, setOpen] = useState(false);

  const handleRowDoubleClick = () => {
    setOpen(true);
    alert("123");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        //  onRowDoubleClick={handleRowDoubleClick}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default MissionTable;
