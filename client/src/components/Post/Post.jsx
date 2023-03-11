import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      

      {/* <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span> */}
      <div className="detail">
        <span>
          <b>Title: {data.title} </b>
        </span><br/>
        <span>Description: {data.desc}</span><br/>
        <span>Skiils Required: {data.skillsRequired}</span>
      </div>

      <div className="postReact">
        <input
          type="text-area"
          placeholder="Cover Letter"
          required
        />

        {/* <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        /> */}
        {/* <img src={Comment} alt="" /> */}
        {/* <img src={Share} alt="" /> */}
        <button className="button a-button">
        Apply
      </button>
      </div>
    </div>
  );
};

export default Post;
