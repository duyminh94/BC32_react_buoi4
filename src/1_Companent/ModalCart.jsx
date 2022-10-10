import React from 'react'

export const ModalCart = ({isOpenCart, onCloseCart, carts, onChangeQuantity}) => {
    if(!isOpenCart){
        return null
    }
    console.log(carts)
    return (
        <div>
            <div className="modal fade show d-block" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Giỏ Hàng</h5>
                            <button type="button" className="close" onClick={onCloseCart} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Hình Ảnh</th>
                                        <th>Đơn Giá</th>
                                        <th>Số  Lượng</th>
                                        <th>Tổng Tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((item, index) =>(
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <img src={item.image} alt={item.name} width="100%" height="50px" />
                                            </td>
                                            <td>{item.price}$</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => onChangeQuantity(item.id, -1)}>-</button>
                                                <span className='mx-1'>{item.quantity}</span>
                                                <button className='btn btn-success'onClick={() => onChangeQuantity(item.id, 1)}>+</button>
                                            </td>
                                            <td>{item.quantity * item.price}$</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onCloseCart}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </div>
    )
}
