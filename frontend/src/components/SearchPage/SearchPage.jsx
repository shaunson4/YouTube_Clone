import axios from "axios";
import { useState } from "react";



const SearchPage=(props)=>{
    const [videos, setVideos, getVideo] = useState([]);
    //add searchTerm variable

    const fetchVideos = async () => {
        try {
            //use string interpolation to insert searchTerm to the axios url string
          let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=pizza&key=AIzaSyCIYSGY1-KiGgmb3f6F1FthlDXC0RhG9V8", getVideo);
          setVideos(response.data.items);
        } catch (error) {
          console.log(error.message);
        }
      };
//build form in the return, based off React Forms lecture
    return(
      <div>{console.log('"videos" in render', videos)}
      <button onClick={fetchVideos}>Click to search</button>
    <form action="" method="">
        <label for="first_name">First Name:</label>
        <input type="text" name="first_name"></input>
        <label for="last_name">Last Name:</label>
        <input type="text" name="last_name"></input>
        <label for="email">Email Address:</label>
        <input type="email" name="email"></input>
            </form>
      </div>
  )



}
export default SearchPage