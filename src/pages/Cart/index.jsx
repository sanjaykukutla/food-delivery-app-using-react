import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Menu from '../../components/common/Menu';
import Header from '../../components/Header/Header'
// import {useState,useEffect} from 'react'
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.css';

const Cart = ({ cartCount, cartList, cartTotal }) => {
  // const [order,setOrder] = useState({})
  // useEffect(() =>{
  //   console.log(order);
  //   const order1=''
  //   {for (let i = 0; i < order.length; i++){
  //     console.log(`${order[i].id} ${order[i].name}`)
  //     let num = order[i].id
  //     let name1 = order[i].name
  //     order1+=num+ name1
  //   }
  //   }
  //   console.log(order1);
  // },[order])
  return (
    <>
    <Header/>
      <div className='cart-header'>
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
            {/* {console.log(cartList)} */}
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
          <button className='orders-button' onClick={()=>{alert(`Your Order ${cartList.map(cart=>`${cart.quantity} ${cart.name} `)} placed successfully`)}}>Place order</button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
