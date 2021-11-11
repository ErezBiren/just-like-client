import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IMission } from "../../store/models";
import CircleIcon from "@mui/icons-material/Circle";
import { AvatarGroup, Box, Modal, Typography } from "@mui/material";
import { Avatar } from "@material-ui/core";

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
    renderCell: (cellValues) => {
      return (
        <div>
          <AvatarGroup max={3}>
            <Avatar>B</Avatar>
            <Avatar>B</Avatar>
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
