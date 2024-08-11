import { useEffect, useState } from "react";
import axios from "axios";
export default function Product(){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        setLoading(true);
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            setProducts(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error);
        })
        },[])
    return(
        <>
        {console.log(products)}
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {
                    products.map((product,key)=>(
                        <div key={key} style={{display:"flex",flexDirection:"column",width:"300px",border:"1px solid",padding:"10px",margin:"10px",borderRadius:"20px"}}>
                            <h1>{product.category}</h1>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <img style={{boxShadow:"0px 0px 10px",borderRadius:"10px"}} width="200px" src={product.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
