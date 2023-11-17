import { useSelector } from 'react-redux';

const Username = () => {
  const { username } = useSelector((state) => state.user);

  if (!username) return null;
  else
    return (
      <div className='hidden text-sm font-semibold md:block'>{username}</div>
    );
};

export default Username;
