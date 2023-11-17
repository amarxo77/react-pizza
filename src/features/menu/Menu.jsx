import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export const loader = async () => {
  return await getMenu();
};

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className='divide-y divide-stone-200'>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
