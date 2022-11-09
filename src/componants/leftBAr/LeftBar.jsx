import "./leftBar.scss";
import loginbd from "../../assets/loginbd.jpg";
import Friends from "../../assets/1.jpg";
import Groups from "../../assets/2.jpg";
import Market from "../../assets/3.jpg";
import Watch from "../../assets/4.jpg";
import Memories from "../../assets/5.jpg";
import Events from "../../assets/6.jpg";
import Gaming from "../../assets/7.jpg";
import Gallery from "../../assets/8.jpg";
import Videos from "../../assets/9.jpg";
import Messages from "../../assets/10.jpg";
import Tutorials from "../../assets/11.jpg";
import Courses from "../../assets/12.jpg";
import Fund from "../../assets/13.jpg";

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={loginbd} alt="" />
            <span>Hazem Mo</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Others</span>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
