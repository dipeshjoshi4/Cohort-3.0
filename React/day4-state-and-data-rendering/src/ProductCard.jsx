import React from 'react'

const ProductCard = ({ product, del }) => {

    return (
        <div className='border-2 p-3  flex flex-col gap-4'>
            <div className='w-40 h-40'>
                <img className='w-40 h-40' src={product.image} />
            </div>
            <div>
                <h2 className='font-semibold'>{product.title.substring(0,10) }</h2>
                <p className='text-xs'>{product.category }</p>
                <p className='text-green-600'>{product.price }</p>
            </div>
            <button className='p-2 bg-red-500' onClick={()=>del(product.id)}>Delete</button>
        </div>
    )
}

export default ProductCard