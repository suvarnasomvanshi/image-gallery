import React, { useState } from 'react'
import axios from "axios";

const ImageGallery = () => {

    const[images,setImages] = useState([]);


    const API_URL = 'https://api.unsplash.com';
    const API_KEY = 'TE7HiDPxbXQWX9MqwdPv5dDGXSrz8Q93rXjDOJHaw7g';


    const fetchImages = async()=>{
        
        try{
            const response = await axios.get(`${API_URL}/photos`,{
                headers:{Authorization:`Client-Id ${API_KEY}`},
            })
            setImages(response.data)
        }catch(err){
            console.error('there is error:', err)
        }
       
    }


  return (
    <div>
      
    </div>
  )
}

export default ImageGallery
