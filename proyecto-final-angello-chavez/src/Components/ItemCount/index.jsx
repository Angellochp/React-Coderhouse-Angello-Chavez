
import React, { useState } from "react";
import "./Style.css";

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="count-container">
            <button className="btn btn-primary p-2" onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button className="btn btn-primary p-2" onClick={onPlus}>+</button>
            <button className="btn btn-primary p-2" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;