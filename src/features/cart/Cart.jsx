import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  // const cart = fakeCart;
  const { cart } = useSelector((state) => state.cart);
  const { username } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='py-3'>
      {!cart.length ? (
        <EmptyCart />
      ) : (
        <>
          <LinkButton to='/menu'>&larr; Back to menu</LinkButton>
          <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

          <ul className='mt-3 divide-y divide-stone-200 border-b border-b-stone-200'>
            {cart.map((item) => (
              <CartItem key={item.pizzaId} item={item} />
            ))}
          </ul>

          <div className='mt-6 space-x-2'>
            {/* <Link to='/order/new'>Order pizzas</Link> */}
            <Button to='/order/new' type='primary'>
              Order pizzas
            </Button>
            <Button type='secondary' onClick={handelClearCart}>
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
