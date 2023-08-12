'use client';

function Error({ error, reset }) {
  return (
    <main className='text-center'>
      <h2 className='text-4hl'>Oh no!</h2>
      <p>{error.message}</p>
      <button className='btn-primary mx-auto my-4' onClick={reset}>Try again</button>
    </main>
  );
}

export default Error;