import React from 'react';
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

async function getTickets() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from('tickets').select();

  if (error) {
    console.log(error);
  }

  return data;
}

async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      <Link href='/tickets/create'>
        <button className='btn-primary'>New Ticket</button>
      </Link>
      {tickets !== null &&
        tickets.map((ticket) => (
          <div key={ticket.id} className='card my-5'>
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        ))}
      {tickets !== null && tickets.length === 0 && (
        <p className='text center'>There are no open tickets.</p>
      )}
    </>
  );
}

export default TicketList;
