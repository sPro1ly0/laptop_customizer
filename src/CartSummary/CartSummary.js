import React, {Component} from 'react';
import CartTotal from '../CartTotal/CartTotal';
import CartItem from '../CartItem/CartItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartSummary extends Component {
    render() {
        return (
            <section className="main__summary">
              <h2>Your cart</h2>
              <CartItem 
                selected={this.props.selected}/>
              <CartTotal 
                selected={this.props.selected}/>
            </section>
        );
    }
}

export default CartSummary;