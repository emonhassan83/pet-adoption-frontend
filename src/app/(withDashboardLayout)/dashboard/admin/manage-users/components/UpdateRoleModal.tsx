import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import PetModal from "@/components/Shared/PetModal/PetModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

const roleOptions = ["ADMIN", "USER"];

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

const UpdateUserRoleModal = ({ open, setOpen, data }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {};

  const defaultValues = {
    role: data?.role,
  };

  return (
    <PetModal maxWidth="xs" open={open} setOpen={setOpen} title="Update User Role">
      <PetFrom onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <PetSelectField
              items={roleOptions}
              name="role"
              label="Role"
              sx={{ mb: 2,}}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update Role</Button>
      </PetFrom>
    </PetModal>
  );
};

export default UpdateUserRoleModal;
