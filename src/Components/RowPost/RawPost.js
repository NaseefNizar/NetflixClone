import React,{ useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constants'

import './RawPost.css'

function RawPost(props) {

    const[movies,setMovies] = useState([])
    const [urlId,setUrlId] =useState('')
    useEffect(() => {
        axios.get(props.url)
        .then(response =>{
            // console.log(response.data);
            setMovies(response.data.results)
        })
        .catch(error => console.log(error))
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1
        }
    }

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            console.log(response.data);
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else {
                console.log('Empty Array');
            }
        })
    }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) => 
        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`} />
        )}
      </div>
      { urlId && <Youtube opts={opts} videoId={urlId.key}></Youtube> }
    </div>
  )
}

export default RawPost
