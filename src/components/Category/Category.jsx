import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

export default function Category({ param }) {
    // console.log(param)
    return (
        
        <div className='category_container'>
            {/* <h1>{param.title}</h1> */}
            <div className="category_title">
            <Link to={`/category/${param}`}>
                <h2>{param}</h2>
            </Link>
            </div>
          </div>
    )}
