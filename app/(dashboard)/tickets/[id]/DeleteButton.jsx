'use client';

import { TiDelete } from 'react-icons/ti';
import { useTransition } from 'react';
import {deleteTicket} from '@/app/(dashboard)/tickets/create/actions';

function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className='btn-primary'
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}>
      {isPending && (
        <>
          <TiDelete /> Deleting...
        </>
      )}
      {!isPending && (
        <>
          <TiDelete /> Delete Ticket
        </>
      )}
    </button>
  );
}

export default DeleteButton;
