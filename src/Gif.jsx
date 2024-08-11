import axios from "axios";
import { useEffect } from "react";
function Gif(){

    useEffect(()=>{
    const fetchdata = async ()=>{
        const options = {
          method: 'GET',
          url: 'https://giphy.p.rapidapi.com/v1/gifs/trending',
          params: {
            api_key: 'dc6zaTOxFJmzC'
          },
          headers: {
            'x-rapidapi-key': 'df9c785ademshfa84631e3184d34p166d4djsn6c2950c335c7',
            'x-rapidapi-host': 'giphy.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        }
        fetchdata()
    })

}

export default Gif