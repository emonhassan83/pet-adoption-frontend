import { cookies } from "next/headers";
import { decodedToken } from "@/utils/jwt";
import AddAdoptButton from "./AddAdoptButton";

export default function AdoptionButtonWrapper({petId}: {petId: string}) {
  const accessToken = cookies().get("accessToken")?.value;
  const user = accessToken ? decodedToken(accessToken) : null;
  console.log(user);
  

  return (
    <>
      <AddAdoptButton petId={petId} user={user} />
    </>
  );
}
