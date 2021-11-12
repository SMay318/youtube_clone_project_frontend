import React from 'react';

function RelatedVideo(props){
   


        return (
         
            <div>
               
              {props.relatedVideos.map((video) =>
                  <div onClick={() => props.selectVideo(video.snippet.thumbnails.default.url)}>
                    <img src={video.snippet.thumbnails.default.url}></img>
                 
                    <div>{video.snippet.title}</div>
                   </div>
              )}
            </div>
        );
    
}

export default RelatedVideo;