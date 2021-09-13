import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";

export default function CartWidget({numer}) {
    return (
        <Link to = {"/ShoppingCart/"}>
        <MdShoppingCart className="cart" />
        <i className="Quenty">{numer}</i>
        </Link>
    )
}
