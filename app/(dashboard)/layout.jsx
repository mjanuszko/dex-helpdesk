import React from 'react';
import Navbar from '../components/Navbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect('/login');
  }

  const user = data.session !== null ? data.session.user : null;

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}

export default DashboardLayout;
