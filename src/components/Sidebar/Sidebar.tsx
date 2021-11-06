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

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
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
      borderLeft: `3px solid var(--main-color)`,
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
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

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
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

function Sidebar() {
  return (
    <>
      <Logo width="125" height="125" />
      <TreeView
        aria-label="gmail"
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowLeftIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ height: 264, flexGrow: 1, maxWidth: 400 }}
      >
        <StyledTreeItem
          nodeId="1"
          labelText="דשבורד"
          labelIcon={DashboardOutlinedIcon}
        />
        <StyledTreeItem
          nodeId="2"
          labelText="מחלקות"
          labelIcon={FolderOutlinedIcon}
        >
          <StyledTreeItem
            nodeId="3"
            labelText="מחלקת אסטרטגיה"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            nodeId="4"
            labelText="מחלקת הדרכות"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            nodeId="5"
            labelText="מחלקת הדרכות"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            nodeId="6"
            labelText="מחלקת הדרכות"
            labelIcon={CircleIcon}
          />
        </StyledTreeItem>
      </TreeView>

      <TreeView
        aria-label="gmail"
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowLeftIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ height: 264, flexGrow: 1, maxWidth: 400 }}
      >
        <StyledTreeItem
          nodeId="6"
          labelText="מאגר רשומים"
          labelIcon={PeopleOutlineIcon}
        />
      </TreeView>
    </>
  );
}

export default Sidebar;
