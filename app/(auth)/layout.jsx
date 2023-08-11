import Link from 'next/link';

function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Dex Helpdesk</h1>
        <Link href='/login/'>Log in</Link>
        <Link href='/signup/'>Sign up</Link>
      </nav>
      {children}
    </>
  );
}

export default AuthLayout;
