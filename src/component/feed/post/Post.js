import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import { Users } from "../../../dummyData";
import { useState } from "react";


export default function Post({ post }) {
const[like,setLike]= useState(post.like)

const likHandler =()=>{
  setLike(like+1)
}


  console.log(post);
  return (
    <div className="post">
        <div className="postWrapper">
         <div className="postTop">
            <div className="postTopLeft">
            <img className="postProfileImg"src="assets/download.png1.jpeg" alt="" />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
                <span className="postdate">{post.date}</span>
            </div>
              <div className="postTopRight">
                <MoreVertIcon/>
                </div>
          </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="assets/download.6.png" onClick={likHandler} alt=""/>
                <img className="likeIcon" src="assets/download.5.png" onClick={likHandler} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postComenttext">{post.comment} comments</span>
              </div>
            </div>
          </div>
        </div>
  )
}
