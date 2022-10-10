import React from 'react'

export const ShoeItem = ({product, onSelect, handleToggleOpen, onAddToCard}) => {
  const handleToggle = (product) => {
    onSelect(product)
    handleToggleOpen()
  }
  return (
    <div>
        <div className='card text-left'>
            <img className='card-img-top' src={product.image} alt="" width="100%" height="300px" />
            <div className='card-body'>
                <h6 className='card-title'>{product.name}</h6>
                <p className='card-text'>{product.price}$</p>
                <button className='btn btn-info mt-3 mx-2 ' onClick={() => handleToggle(product)}>Chi Tiết</button>
                <button className='btn btn-success mt-3' onClick={() => onAddToCard(product)}>
                <i className="fa-solid fa-cart-shopping" />
                Thêm Giỏ Hàng</button>
            </div>
        </div>
    </div>
  )
}
