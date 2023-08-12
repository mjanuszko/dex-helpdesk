"use client";

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

function SubmitButton(props) {
  const { pending } = useFormStatus();

  return (
    <button className='btn-primary' disabled={pending}>
      {pending && <span>Submitting...</span>}
      {!pending && <span>Submit</span>}
    </button>
  );
}

export default SubmitButton;