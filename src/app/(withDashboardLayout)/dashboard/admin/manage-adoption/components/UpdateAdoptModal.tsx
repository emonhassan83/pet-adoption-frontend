import PetFrom from "@/components/Forms/PetForm";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

const statusOptions = ["PENDING", "APPROVED", "REJECTED"];

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const UpdateAdoptStatusModal = ({ open, setOpen, data }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {};

  const defaultValues = {
    status: data?.status,
  };

  return (
    <PetModal maxWidth="xs" open={open} setOpen={setOpen} title="Update Pet Adopt status">
      <PetFrom onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <PetSelectField
              items={statusOptions}
              name="status"
              label="status"
              sx={{ mb: 2,}}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update Adopt Status</Button>
      </PetFrom>
    </PetModal>
  );
};

export default UpdateAdoptStatusModal;
