import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './img1.webp';
import logo from './logo.jpg';
export default function Second() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  };

  return (
    <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card border-light mb-3 shadow p-3" style={{ maxWidth: '18rem' }}>
        <div className="card-body">
          <img src={logo} alt="logo" />
          <h3 className="card-title" style={{ marginTop: '2rem' }}>Willkommen<br/>Zuhause</h3>
          <h5 className="card-text" style={{ marginTop: '5rem' }}>
            We offer lots, if you are interested <a href="#" onClick={handleClick}>Click Here</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
