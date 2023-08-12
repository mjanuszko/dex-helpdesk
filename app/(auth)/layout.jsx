import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function AuthLayout({ children }) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore
  });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect('/');
  }

  return (
    <>
      <nav>
        <h1 className='mr-auto'>Dex Helpdesk</h1>
        <Link href='/login/'>Log in</Link>
        <Link href='/signup/'>Sign up</Link>
      </nav>
      {children}
    </>
  );
}

export default AuthLayout;
