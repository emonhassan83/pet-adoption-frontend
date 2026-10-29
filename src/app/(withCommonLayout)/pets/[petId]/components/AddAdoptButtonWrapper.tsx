import { cookies } from "next/headers";
import { decodedToken } from "@/utils/jwt";
import AddAdoptButton from "./AddAdoptButton";

export default async function AdoptionButtonWrapper({petId}: {petId: string}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const user = accessToken ? decodedToken(accessToken) : null;

  return (
    <>
      <AddAdoptButton petId={petId} user={user} />
    </>
  );
}
