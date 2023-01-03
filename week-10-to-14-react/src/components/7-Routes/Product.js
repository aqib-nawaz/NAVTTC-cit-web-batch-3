import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Product = () => {
    const {pid} = useParams()
    const navigate = useNavigate()

    return (
        <div>Product No : {pid}
            <p> Select * form Products Where product_id = {pid}</p>
            <div>
                <button style={{
                width: 200,
                height: 40,
                fontSize: 25,
                fontWeight: 'bold',
                backgroundColor: "red",
                marginTop: 20,
                marginLeft: 20,
                color: "white",
                cursor: "pointer"

            }} 
            onClick={() => {
                navigate(-1)
            }}>
                Back
            </button>
            </div>
        </div>
        
    )
}

export default Product