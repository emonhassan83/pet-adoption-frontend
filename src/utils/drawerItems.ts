import { DrawerItem, UserRole } from "@/types";

//* icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddTaskIcon from '@mui/icons-material/AddTask';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import KeyIcon from "@mui/icons-material/Key";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { USER_ROLE } from "@/constant/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupAddIcon,
        },
        {
          title: "Add Pet",
          path: `${role}/add-pet`,
          icon: AddCircleOutlineIcon,
        },
        {
          title: "Manage Pets",
          path: `${role}/manage-pet`,
          icon: AcUnitIcon,
        },
        {
          title: "Adoption Requests",
          path: `${role}/manage-adoption`,
          icon: ManageHistoryIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Add Adoption",
          path: `${role}/add-adoption`,
          icon: AddTaskIcon,
        },
        {
          title: "Manage Adoption",
          path: `${role}/manage-adoption`,
          icon: ManageHistoryIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
