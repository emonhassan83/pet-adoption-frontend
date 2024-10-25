"use client";

import { Button } from "@mui/material";
import AddAdoptModal from "./AddAdoptModal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { isLoggedIn } from "@/services/auth.services";

const AddAdoptButton = ({ petId, user }: { petId: string; user?: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loginUser = isLoggedIn();
  const router = useRouter();

  const handleButtonClick = () => {
    if (!loginUser) {
      router.push("/login");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {loginUser ? (
        <>
          <AddAdoptModal
            open={isModalOpen}
            setOpen={setIsModalOpen}
            petId={petId}
          />
          <Button
            fullWidth
            disabled={user?.role === "ADMIN"}
            onClick={handleButtonClick} // Add redirection or modal logic
            sx={{ mt: 4 }}
          >
            Apply to Adopt
          </Button>
        </>
      ) : (
        <Button fullWidth onClick={() => router.push("/login")} sx={{ mt: 4 }}>
          Apply to Adopt
        </Button>
      )}
    </>
  );
};

export default AddAdoptButton;
