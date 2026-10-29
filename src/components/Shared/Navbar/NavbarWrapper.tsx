import React from 'react';
import Navbar from './Navbar';
import { cookies } from 'next/headers';

export default async function NavbarWrapper() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  return <Navbar accessToken={accessToken} />;
}
