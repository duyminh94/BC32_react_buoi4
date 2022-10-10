import React from 'react'

export const Modal = ({ product, isOpen, onClose }) => {
    if (!isOpen) {
        return null
    }
    return (
        <div>
            <div className='modal fade show d-block' tabIndex={-1} role='dialog' aria-labelledby="exampleModalLabel" aria-hidden='true'>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Đôi Giầy</h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row mt-5">
                                <div className="col-sm-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width="50%"
                                        height="200px"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <h3>Chi Tiết Đôi Giầy</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{product.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Alias</td>
                                                <td>{product.alias}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>{product.price}$</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{product.description}</td>
                                            </tr>
                                            <tr>
                                                <td>Show Description</td>
                                                <td>{product.shortDescription}</td>
                                            </tr>
                                            <tr>
                                                <td>Quantity</td>
                                                <td>{product.quantity}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </div>
    )
}
