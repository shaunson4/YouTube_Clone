// import React from "react"
// import { useNavigate } from "react-router-dom"
// import useAuth from "../../hooks/useAuth"
// import useCustomForm from "../../hooks/useCustomForm"
// import axios from 'axios'


// let initialtValues ={
//     video_id: "",
//     text:"",
//     likes:"",
//     dislikes:""
    


// };

//   const AddCommentPage = () =>{
//      const [user, token] = useAuth()
//      const navigate = useNavigate
//      const [formData, handleInputChange, handleSubmit] = useCustomForm(initialtValues, postNewComment)

//      async function postNewComment(){
//      try{
//          let response = await axios.post("http://127.0.0.1:8000/api/comment/add/", formData,{
//              headers:{
//                  Authorization: 'Bearer ' + token
//              }

//          })
//          navigate("/")
//      }catch (error){
//         console.log(error,message)
//      }
//     }

//      return (
//         <div className="container">
//           <form className="form" onSubmit={handleSubmit}>
           
        
//             <label>
//               Password:{" "}
//               <input
//                 type="text"
//                 name="video_id"
//                 value={formData.video_id}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Password:{" "}
//               <input
//                 type="text"
//                 name="text"
//                 value={formData.text}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Password:{" "}
//               <input
//                 type="text"
//                 name="likes"
//                 value={formData.likes}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Password:{" "}
//               <input
//                 type="text"
//                 name="dislikes"
//                 value={formData.dislikes}
//                 onChange={handleInputChange}
//               />
//             </label>
//             {isServerError ? (
//               <p className="error">Login failed, incorrect credentials!</p>
//             ) : null}
//             <Link to="/register">Click to register!</Link>
//             <button>Login!</button>
//           </form>
//         </div>
//       );

// }
//  export default AddCommentPage