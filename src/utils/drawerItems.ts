import { DrawerItem, UserRole } from "@/types";

//* icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { USER_ROLE } from "@/constant/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `profile`,
      icon: AccountCircleIcon,
    },
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
          icon: TryIcon,
        },
        {
          title: "Add Pet",
          path: `${role}/add-pet`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Manage Pets",
          path: `${role}/manage-pet`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Adoption Requests",
          path: `${role}/manage-adoption`,
          icon: CalendarMonthIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Add Adoption",
          path: `${role}/add-adoption`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Adoption",
          path: `${role}/manage-adoption`,
          icon: DashboardIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
