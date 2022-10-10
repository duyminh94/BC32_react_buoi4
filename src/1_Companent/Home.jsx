import React, { Component } from 'react'
import data from './Data.json'
import { ShoeList } from './ShoeList'
import { Modal } from './Modal'
import { ModalCart } from './ModalCart'


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataShoe: null,

      isOpen: false,

      isOpenCart: false,

      carts: []
    }
  }

  handleToggle = (product) => {
    console.log(product)
    this.setState({ dataShoe: product })
  }
  /* Chi tiết Đôi Giầy */
  handleToggleOpen = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }))
  }
  /* Giỏ Hàng */
  handleToggleCart = () => {
    this.setState((state) => ({isOpenCart: !state.isOpenCart}))
  }
  /* Thêm vào Giỏ Hàng */
  handleAddToCart = (product) => {
    console.log("Sản Phẩm Thêm vào giỏ hàng", product)
    const index = this.state.carts.findIndex((item) => item.id ===  product.id)

    if (index === -1) {
      this.setState((state) => ({
        carts: [...state.carts, { ...product, quantity: 1 }],
      }))
    } else {
      const newCarts = [...this.state.carts]
      newCarts[index].quantity += 1;
      this.setState({ carts: newCarts })
    }
  }

  handleChangeQuantity = (productId, quantity) => {
    const index = this.state.carts.findIndex(item => item.id === productId)
    const newCarts = [...this.state.carts];

    if (newCarts[index].quantity === 1 && quantity === -1) {
      newCarts.splice(index, 1)
      this.setState({ carts: newCarts })
    } else {
      newCarts[index].quantity += quantity;
      this.setState({ carts: newCarts });
    }

  }
  render() {
    return (
      <div className='container'>
        <div className="d-flex justify-content-between mb-3">
          <h1 className='text-info'>Shoe Shop</h1>
          <button className='btn btn-success' onClick={this.handleToggleCart}>Giỏ Hàng</button>
        </div>
        
        <ShoeList products={data}
          onSelect={this.handleToggle}
          handleToggleOpen={this.handleToggleOpen}
          onAddToCard={this.handleAddToCart} />
        <Modal isOpen={this.state.isOpen}
          onClose={this.handleToggleOpen}
          product={this.state.dataShoe} />
        <ModalCart isOpenCart={this.state.isOpenCart}
          onCloseCart={this.handleToggleCart}
          carts={this.state.carts}
          onChangeQuantity={this.handleChangeQuantity} />
      </div>
    )
  }
}
