import React, { useEffect, useState } from 'react'
import axios from "axios";
import SearchBar from './SearchBar';




const ImageGallery = () => {

    const[images,setImages] = useState([]);
    const[searchValue,setSearchValue] = useState(' ');

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

    useEffect(()=>{
        fetchImages();
    },[])



    const handelSearch = async ()=>{

        try{

            const response = await axios.get(`${API_URL}/saerch/photos`,{
            headers :{ Authorisation :`Client-Id ${API_KEY}`},
            params :{query : searchValue,},
        })

        setImages(response.data.results);

    }catch(err){
        console.log('error is : ',err)
    }

        
    }


  return (
    <div>

      <SearchBar
      searchValue = {searchValue}
      handleChange ={(newVal)=>setSearchValue(newVal)}
      onSearch={handelSearch}
      />


    </div>
  )
}

export default ImageGallery
