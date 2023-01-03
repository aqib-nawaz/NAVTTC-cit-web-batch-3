import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        
        <div>
            <Link to='/product/12'>Microwave</Link>{" "}
            <Link to='/product/900'>Oven</Link>{" "}
            <Link to='/product/1'>Matches</Link>{" "}
            
        </div>
    )
}

export default Home