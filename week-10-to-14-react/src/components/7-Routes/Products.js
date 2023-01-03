import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

    const [searchParams] = useSearchParams()
    const paramObj =Object.fromEntries([...searchParams])
    return (
        <div>Products
            <p>{paramObj.id}</p>
        </div>
    )
}

export default Products