import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList/index';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const {categoryId}  = useParams()
  console.log(categoryId)

  useEffect(()=> {
    fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then (json=>console.log(json))
    .catch((err) => {
      console.log('no funciono')
    });

    fetch('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(products => {
        if (categoryId) {
          const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
          console.log(productosFiltradosPorCategoria)
          setProducts(productosFiltradosPorCategoria)
        } else {
          setProducts(products)
        }
      })
      .catch((err) => {
        alert("Esta página no existe")
      });

  }, [categoryId])

  console.log(products)

  return (
    <div>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer