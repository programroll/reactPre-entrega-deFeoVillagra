import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "35px",
                marginRight:"5rem" ,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            <FontAwesomeIcon icon={faCartShopping} style={{ "--fa-primary-color": "#552a02", "--fa-secondary-color": "#552a02", }} />
            <span>1</span>
        </div>
    )
}

export default CartWidget;