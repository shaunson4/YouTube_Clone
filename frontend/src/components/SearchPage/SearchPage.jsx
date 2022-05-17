import axios from "axios";
import { useState } from "react";



const SearchPage=(props)=>{
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    

    const fetchVideos = async () => {
        try {
            //using string interpolation to insert searchTerm to the axios url string
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyCIYSGY1-KiGgmb3f6F1FthlDXC0RhG9V8`, );
          setVideos(response.data.items);
        } catch (error) {
          console.log(error.message);
        }
      };

//build form in the return, based off React Forms lecture
//form needs to insert what gets typed in to the setSearchTerm function
    return(
      <div>{console.log('"videos" in render', videos)}
      {console.log('searchTerm in render', searchTerm)}
      <button onClick={fetchVideos}>Click to search</button>

     <form action="" method="">
        <label for="search_video">search video:</label>
        <input type="text" name="search_video"></input>
            </form>
      </div>
  )



}
export default SearchPage