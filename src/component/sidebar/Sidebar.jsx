import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarksIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/Help';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sideWeapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon"/>
            <span className="sidebarListText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon"/>
          <span className="sidebarListText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcon"/>
          <span className="sidebarListText">Video</span>
          </li>
          <li className="sidebarListItem">
            <PeopleIcon className="sidebarIcon"/>
          <span className="sidebarListText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarIcon"/>
          <span className="sidebarListText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon"/>
          <span className="sidebarListText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarIcon" />
          <span className="sidebarListText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon  className="sidebarIcon"/>
          <span className="sidebarListText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon  className="sidebarIcon"/>
          <span className="sidebarListText">Courses</span>
          </li>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/downloads.2.jpeg" alt=""/>
               <span className="sidebarFriendName">Narendra Modi</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/1.jpg" alt=""/>
               <span className="sidebarFriendName">MS Dhoni</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/2.jpg" alt=""/>
               <span className="sidebarFriendName">Cristiano Ronaldo</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/3.jpg" alt=""/>
               <span className="sidebarFriendName">Virat Kohli</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/4.jpg" alt=""/>
               <span className="sidebarFriendName">Shah Rukh Khan
 </span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/5.jpg" alt=""/>
               <span className="sidebarFriendName">A. P. J. Abdul Kalam</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/6.jpg" alt=""/>
               <span className="sidebarFriendName">Lionel Andrés Messi
</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/7.jpg" alt=""/>
               <span className="sidebarFriendName">Sundar Pichai</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/8.jpg" alt=""/>
               <span className="sidebarFriendName">Edward Hurley</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/9.jpg" alt=""/>
               <span className="sidebarFriendName">kaushal kumar</span>
           </li>
           <li className="sidebarFriend">
               <img className="sidebarFriendImg" src="/assets/10.jpg" alt=""/>
               <span className="sidebarFriendName">Vicky Singh</span>
           </li>





        </ul>
      </div>
    </div>
  )
}
