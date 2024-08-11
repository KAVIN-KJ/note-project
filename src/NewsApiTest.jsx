import axios from "axios"
import { useEffect, useState } from "react"
import test from './response.json'

function NewsApiTest() {
    
    const [response,setResponse] = useState(test)
    
    return(
        <>
            {
                response.data.articles.map((article,key)=>(
                    <div key={key} >
                        <h2>{article.author}</h2>
                        <img src={article.urlToImage} width="200px" alt="" />
                    </div>
                ))
            }
        </>
    )
}
export default NewsApiTest