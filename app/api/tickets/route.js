import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await fetch('http://localhost:4000/tickets');

  const tickets = await response.json();

  return NextResponse.json(tickets, {
    status: 200
  });
}

export async function POST(request) {
  const ticket = await request.json();

  const response = await fetch(' http://localhost:4000/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket)
    });

    const newTicket = await response.json();
    if (response.status === 201) {
      return NextResponse.json(newTicket, {
        status: 201
      });
    }
}