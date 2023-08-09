import Image from 'next/image';
import Link from 'next/link';
import Logo from './dex-logo.png';

function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dex Helpdesk logo'
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h1>Dex Helpdesk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets/'>Tickets</Link>
    </nav>
  );
}

export default Navbar;
