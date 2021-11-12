import React from 'react';
import { useEffect } from 'react';

function RelatedVideo(props){
   
    useEffect(()=>{
        
    },[props.videoId])

        return (
         
            <div className='relatedVideo'>
               
              {props.relatedVideos.map((video) => {
                if (video.snippet){
                  return (<div>
                  
                    <span onClick={() => props.changeVideo(video.id.videoId)}>
                        <img src={video.snippet.thumbnails.default.url}></img>
                    </span>
                    <div>{video.snippet.title}</div>
              
                  </div>)
                }
              })}

            </div>
        );
    
}

export default RelatedVideo;