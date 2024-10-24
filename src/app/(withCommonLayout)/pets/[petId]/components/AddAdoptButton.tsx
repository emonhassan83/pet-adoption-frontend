"use client";

import { Button } from "@mui/material";
import AddAdoptModal from "./AddAdoptModal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetMyProfileQuery } from "@/redux/api/userApi";

const AddAdoptButton = ({ petId, user }: { petId: string; user?: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetMyProfileQuery({});
  const router = useRouter();

  const handleButtonClick = () => {
    if (!user) {
      router.push("/login");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <AddAdoptModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        petId={petId}
        data={data}
      />
      <Button
        fullWidth
        disabled={ user?.role === "ADMIN"}
        onClick={handleButtonClick} // Add redirection or modal logic
        sx={{ mt: 4 }}
      >
        Apply to Adopt
      </Button>
    </>
  );
};

export default AddAdoptButton;
