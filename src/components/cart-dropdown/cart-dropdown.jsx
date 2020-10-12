import React from 'react';
import CustomButton from '../../components/button/button';
import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Ir para Checkout</CustomButton>
    </div>
);

export default CartDropdown;