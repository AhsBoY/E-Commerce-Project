import { useEffect, useState } from "react/cjs/react.development"

const useProducts = () => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        fetch("./products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])
    // return neccessary things
    return [products]
}


export default useProducts    //// exoport korte hobe