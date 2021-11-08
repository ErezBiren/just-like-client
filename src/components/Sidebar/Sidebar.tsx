import { ReactComponent as Logo } from "../../assets/auth/justLikeLogo.svg";
import TreeView from "@mui/lab/TreeView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { TreeItem, treeItemClasses, TreeItemProps } from "@mui/lab";
import { Box, styled, SvgIconProps, Typography } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import classes from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent } from "react";

type StyledTreeItemProps = TreeItemProps & {
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
  name: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    height: 56,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: `var(--main-color)`,
      borderRight: `5px solid var(--main-color)`,
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
  const { labelIcon: LabelIcon, labelInfo, labelText, ...other } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <LabelIcon />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      {...other}
    />
  );
}

function Sidebar() {
  const navigate = useNavigate();

  const onTreeViewItemClicked = (e: React.MouseEvent<HTMLElement>) => {
    const input = e.target as HTMLElement;
    console.log(input.innerText);

    switch (input.innerText) {
      case "מאגר רשומים":
        navigate("users");
        break;
      case "דשבורד":
        navigate("dashboard");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Logo width="125" height="125" />
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowLeftIcon />}
      >
        <StyledTreeItem
          name="dashboard"
          nodeId="1"
          labelText="דשבורד"
          labelIcon={DashboardOutlinedIcon}
          onClick={onTreeViewItemClicked}
        />
        <StyledTreeItem
          name="departmens"
          nodeId="2"
          labelText="מחלקות"
          labelIcon={FolderOutlinedIcon}
        >
          <StyledTreeItem
            name="departmens"
            nodeId="3"
            labelText="מחלקת אסטרטגיה"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            name="departmens"
            nodeId="4"
            labelText="מחלקת הדרכות"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            name="departmens"
            nodeId="5"
            labelText="מחלקת הדרכות"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            name="departmens"
            nodeId="6"
            labelText="מחלקת הדרכות"
            labelIcon={CircleIcon}
          />
        </StyledTreeItem>
        <StyledTreeItem
          name="users"
          nodeId="7"
          labelText="מאגר רשומים"
          labelIcon={PeopleOutlineIcon}
          onClick={onTreeViewItemClicked}
        />
      </TreeView>
    </>
  );
}

export default Sidebar;
