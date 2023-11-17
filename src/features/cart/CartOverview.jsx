import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getCartTotalPrice, gerCartTotalQuantity } from './cartSlice';

function CartOverview() {
  const totalPrice = useSelector(getCartTotalPrice);
  const totalQuantity = useSelector(gerCartTotalQuantity);

  if (!totalPrice || !totalQuantity) return null;

  return (
    <div className='flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base'>
      <p className='font-semibold text-stone-300'>
        <span className='mr-4 sm:mr-6'>
          {totalQuantity} {totalQuantity > 1 ? 'pizzas' : 'pizza'}
        </span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
