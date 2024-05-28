import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

const statusOptions = ["ACTIVE", "BLOCKED", "DELETED"];

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const UpdateUserStatusModal = ({ open, setOpen, data }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {};

  const defaultValues = {
    status: data?.status,
  };

  return (
    <PetModal maxWidth="xs" open={open} setOpen={setOpen} title="Update User Status">
      <PetFrom onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <PetSelectField
              items={statusOptions}
              name="status"
              label="Status"
              sx={{ mb: 2}}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update Status</Button>
      </PetFrom>
    </PetModal>
  );
};

export default UpdateUserStatusModal;
