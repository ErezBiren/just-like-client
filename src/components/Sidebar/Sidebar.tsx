import { ReactComponent as Logo } from "../../assets/justLikeLogo.svg";
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
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
  color?: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    height: 56,

    color: "var(--tree-view-color)",
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

const StyledTreeItem = (props: StyledTreeItemProps) => {
  const { labelIcon: LabelIcon, labelInfo, labelText, color, ...other } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box ml={3}>
            <LabelIcon />
          </Box>
          <Typography>{labelText}</Typography>
          <Typography variant="caption">{labelInfo}</Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
      }}
      {...other}
    />
  );
};

const Sidebar = () => {
  const departments = useSelector(
    (state: RootState) => state.dashboard.departments
  );

  const navigate = useNavigate();

  const onTreeViewItemClicked = (e: React.MouseEvent<HTMLElement>) => {
    const input = e.target as HTMLElement;
    //todo: don't rely on inner text
    switch (input.innerText) {
      case "מאגר רשומים":
        navigate("users");
        break;
      case "דשבורד":
        navigate("dashboard");
        break;
      case "המשימות שלי":
        navigate("dashboard");
        break;
      default:
        const department = departments.find((d) => d.name === input.innerText);
        navigate(`departments/${department?.id}`);
        break;
    }
  };

  return (
    <>
      <Link to="/">
        <Logo width="125" height="125" />
      </Link>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowLeftIcon />}
        defaultSelected="1"
      >
        <StyledTreeItem
          nodeId="1"
          labelText="דשבורד"
          labelIcon={DashboardOutlinedIcon}
          onClick={onTreeViewItemClicked}
        />
        <StyledTreeItem
          nodeId="2"
          labelText="המשימות שלי"
          labelIcon={AssignmentTurnedInOutlinedIcon}
          onClick={onTreeViewItemClicked}
        />
        <StyledTreeItem
          nodeId="3"
          labelText="מחלקות"
          labelIcon={FolderOutlinedIcon}
        >
          {departments?.map((department, idx) => (
            <StyledTreeItem
              nodeId={`3. + ${department.id}`}
              labelText={department.name}
              labelIcon={CircleIcon}
              color={department.color}
              onClick={onTreeViewItemClicked}
            />
          ))}
        </StyledTreeItem>
        <StyledTreeItem
          nodeId="4"
          labelText="מאגר רשומים"
          labelIcon={PeopleOutlineIcon}
          onClick={onTreeViewItemClicked}
        />
      </TreeView>
    </>
  );
};

export default Sidebar;
