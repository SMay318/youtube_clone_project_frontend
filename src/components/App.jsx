import { googleAPIKey } from '../keys';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = (props) => {
    const [videos, setVideos] = useState([]);
    const [searchVideo, searchVideos] = useState('dogs');

    async function fetchVideos(){
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=${searchVideo}&type=video&key=AIzaSyA6AWdPkdNSnY0BdnnlfJDYQlclZTQDo_s')
        setVideos(response.data.results);
    }

    useEffect(() => {
        let mounted = true;
        if(mounted){
            fetchVideos();
        }
        return () => mounted = false;
    }, [])

    

    return(
        <div>
             <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
             frameborder="0"></iframe>
         </div>

         
    )

       
    
}
export default App;