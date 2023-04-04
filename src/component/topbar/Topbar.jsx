import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Chat,Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
        <span className="logo">surajsocial</span>
       </div>
       <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="search for friend, post or video" className="searchInput"/>
        </div>
       </div>
       <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
             <PersonIcon/>
             <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
             <Chat/>
             <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
             <Notifications/>
             <span className="topbarIconBadge">3</span>
            </div>
          <img src="assets/download.png1.jpeg" alt="" className="topbarImg" />
          </div>

       </div>
    </div>
  )
}
