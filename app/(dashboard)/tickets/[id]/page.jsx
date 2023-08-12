import { notFound } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import DeleteButton from './DeleteButton';

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore
  });

  const { data: ticket } = await supabase
    .from('tickets')
    .select()
    .eq('id', params.id)
    .single();
  return {
    title: `${ticket.title || 'Ticket not found'} - Dex Helpdesk`
  };
}

async function getTicket(id) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore
  });

  const { data, error } = await supabase
    .from('tickets')
    .select()
    .eq('id', id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore
  });

  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className='ml-auto'>
          {data.session.user.email === ticket.user_email && (
            <DeleteButton id={ticket.id} />
          )}
        </div>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}

export default TicketDetails;
