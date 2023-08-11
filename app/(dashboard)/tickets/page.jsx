import TicketList from './TicketList';
import { Suspense } from 'react';
import Loading from '@/app/(dashboard)/loading';

export const metadata = {
  title: 'Tickets - Dex Helpdesk'
};

function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}

export default Tickets;
