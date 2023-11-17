import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type='text'
        placeholder='Search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-48 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-52 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1 sm:w-64 sm:focus:w-72'
      />
    </form>
  );
}
