import React from 'react';
import {useNavigate} from 'react-router-dom';

function Topbar() {
const navigate = useNavigate();
const Newbutton = async () => {
 navigate('/new');
};
const Topoftheworldbutton = async () => {
 navigate('/topoftheworld');
};
const Adaptedbutton = async () => {
 navigate('/adapted');
};
const Playbutton = async () => {
 navigate('/play');
};
const logout = async () => {
 await localStorage.removeItem("token");
 navigate('/')
};

return (
<>
  <nav className="navbar navbar-light bg-dark">
      <img src="https://cdn6.f-cdn.com/contestentries/2280428/62667522/64b39488b3f79_thumb900.jpg" width="180" height="65" className="d-inline-block align-top" alt="" style={{marginLeft:"15px"}}/>
      <div style={{fontSize:"35px", color:"red", marginRight:"70px"}}><b>Explore Your Place To Stay</b></div>
  </nav>
  <nav className="navbar  navbar-light bg-danger">
    <div className="container" style={{textAlign:"center"}}>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-danger" onClick={Newbutton}><i className="fa fa-key" aria-hidden="true"></i><br/>New</button>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-danger" onClick={Topoftheworldbutton}><i className="fa fa-area-chart" aria-hidden="true"></i><br/>Top of the world</button>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-danger" onClick={Adaptedbutton}><i className="fa fa-wheelchair-alt" aria-hidden="true"></i><br/>Adapted</button>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-danger" onClick={Playbutton}><i className="fa fa-cubes" aria-hidden="true"></i><br/>Play</button>
      <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
    </div>
  </nav>
</>
);
}
export default Topbar;
