import List from "@mui/material/List";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
// import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
// import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

//   console.log(userInfo);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        sx={{
          py: 1,
          mt: 1,
        }}
        component={Link}
        href="/"
      >
        <PetsOutlinedIcon sx={{ color: "primary.main" }} />
        <Typography
          variant="h6"
          component="h6"
          fontWeight={600}
          sx={{ color: "primary.main" }}
        >
          Pet Finder
        </Typography>
      </Stack>
      {/* Drawer Item */}
      <List>
        {/* {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))} */}
      </List>
    </Box>
  );
};

export default Sidebar;
