import TicketList from './TicketList';
import { Suspense } from 'react';
import Loading from '@/app/(dashboard)/loading';
import Link from 'next/link';

export const metadata = {
  title: 'Tickets - Dex Helpdesk'
};

function Tickets() {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <div className='ml-auto'>
          <Link href='/tickets/create'>
            <button className='btn-primary'>New Ticket</button>
          </Link>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}

export default Tickets;
