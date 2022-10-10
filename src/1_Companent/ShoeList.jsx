import React from 'react'
import { ShoeItem } from './ShoeItem'

export const ShoeList = ({ products, onSelect, handleToggleOpen, onAddToCard }) => {
    return (
        <div>
            <div className='row'>
                {products.map((product) => (
                    <div key={product.id} className="col-sm-4 py-3">
                        <ShoeItem product={product} onSelect={onSelect} handleToggleOpen={handleToggleOpen} onAddToCard={onAddToCard} />
                    </div>
                ))}
            </div>
        </div>
    )
}
