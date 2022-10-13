import React, {useState, useContext} from "react";
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)


const CartProvider = ({children}) => {
    //Estado Carrito
    const [cart, setCart] = useState([])
   

//--------------------------------------------------------------------------------------------------------------//

//FUNCIONES PARA EL CARRITO 
//Agregar al carrito
const agregarProducto = (item,stock)=>{
    if(estaEnElCarrito(item.id)){
        setCart(cart.map(product =>{
            return product.id === item.id ? {...product, stock:product.stock+stock} : product
        }))
    }else{
        setCart([...cart,{...item,stock}])
    }
}
//Comprobacion Agregar al carrito
console.log('carrito', cart)

//Limpiar Carrito
const limpiarCarrito = () => setCart([])

//Esta en el carrito
const estaEnElCarrito = (id) => cart.find(product => product.id === id)? true : false

//Borrar del carrito
const borrarProducto = (id) => setCart(cart.filter(product => product.id !== id))


//Precio Total 
const precioTotal = () => {
    return cart.reduce((prev,act)=> prev + act.stock * act.precio, 0)
}

//Total de Productos
const totalProductos = () => cart.reduce((acumulador, productoActual)=> acumulador + productoActual.stock, 0)

//--------------------------------------------------------------------------------------------------------------//


    return(
        <CartContext.Provider value={{
            limpiarCarrito,
            estaEnElCarrito,
            borrarProducto,
            agregarProducto,
            precioTotal,
            totalProductos,
            cart


        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
