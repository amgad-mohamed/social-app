import "./rightBar.scss";

function RightBar() {
  return (
    <div className="righrBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <span>Hazem Mo</span>
            </div>
            <div className="buttnos">
            <button type="">follow</button>
            <button type="">dimiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
