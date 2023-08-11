import CreateForm from '@/app/(dashboard)/tickets/create/CreateForm';
import React from 'react';

function CreateTicket(props) {
  return (
    <main>
      <h2 className='text-primary text-center'>Add a new Ticket</h2>
      <CreateForm />
    </main>
  );
}

export default CreateTicket;
