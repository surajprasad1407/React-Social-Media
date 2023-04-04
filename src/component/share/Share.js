import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className="share">
      <div className="sharWrapper">

      <div className="shareTop">
        <img className="shareprofileImg" src="assets/download.png1.jpeg" alt=""/>
        <input 
        placeholder="What's in your mind suraj?" className="shareInput"/> 
       </div>

       <hr className="shareHr"/>

       <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOption">
            <LabelIcon htmlColor="blue" className="shareIcon"/>
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <LocationOnIcon  htmlColor="green" className="shareIcon"/>
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
            <span className="shareOptionText">Feelings</span>
          </div>

        </div>
       </div>

      </div>
    </div>
  )
}
