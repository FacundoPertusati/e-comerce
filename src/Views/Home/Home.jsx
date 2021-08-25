import React from 'react'
import './Home.css'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Categories from "../Categories/Categories"
function Home() {
    return (
        <div>
            <div className="da">
                <div>
                <Categories />
                </div>
                <div className="home">
                <ItemListContainer />
                </div>
            </div>
        </div>
    )
}

export default Home
