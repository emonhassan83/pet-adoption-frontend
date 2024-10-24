import List from "@mui/material/List";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { UserRole } from "@/types";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import { drawerItems } from "@/utils/drawerItems";
import SidebarItem from "./SidebarItems";
import Image from "next/image";
import assets from "@/assets";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="start"
        gap={1}
        sx={{
          py: 1,
          mt: 1,
          ml: 2
        }}
        component={Link}
        href="/"
      >
        <Image
              src={assets.images.logo}
              alt="PetPlace Logo"
              width={45}
              height={45}
            />
        <Typography
          variant="h6"
          component="h6"
          fontWeight={600}
          // sx={{ color: "primary.main" }}
        >
          Pet Finder
        </Typography>
      </Stack>
      {/* Drawer Item */}
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
