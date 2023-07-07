import React from 'react';
import Card from './Card';
import img1 from './img1.webp';
import apple from './apple.png';
import google from './google.png';
import browser from './browser.png';


const Main = () => {
  return (
    <div style={{backgroundColor:"lightgray"}}>
      <div style={{ width: '100vw', height: '70vh', display: 'flex', flexDirection: 'column', padding:"3%" }}>
        <div className="card mb-5" style={{ maxWidth: '100%', background: 'transparent', border: 'none', flex: '1' }}>
          <div className="row g-0" style={{ height: '70%' }}>
          
            <div className="col-md-8">
              <div className="card-body" style={{ color: 'black', textAlign: 'left' }}>
                <h1 className="card-title" style={{color:"orange"}}>Das alles und noch viel mehr</h1>
                <p className="card-text">
                  ...ist über unsere App möglich. Überzeugen Sie sich selbst und melden sich gleich an. Nutzen Sie die oben beschriebenen
                  Funktionen und noch mehr:
                </p>

                <ul>
                <li>Information (Notrufnummern, Ansprechpartner etc.)</li>
              <li>Online-Formulare</li>
              <li>Chatten unter Nachbarn</li>
              <li>Sharing-Portal</li>
              <li>Terminkalender</li>
              <li>Neuigkeiten aus der Umgebung (RSS-Feed)</li>
              <li>Timeline – aktuelle Geschehnisse auf einen Blick</li>
              <li>Informationen zu ÖPNV</li>
              <li>Beanstandungsmanagement</li>
              <li>Dokumentenverwaltung (Mietvertrag, Nebenkostenabrechnung etc.)</li>
              <li>Lebensmittel-Lieferung</li>
              <li>Essensbestellungen</li>
              <li>Wäsche-Service</li>
              <li>Car-Sharing</li>
              <li>Smart Parking</li>
              <li style={{color:"red"}}>Tiefgaragentellplatz</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='sec' style={{ marginTop: '4rem'}}>
              <Card/>
              </div>
            </div>
          </div>
        </div>
        <hr />         
           
            <div className="container">
            <h1 style={{ textAlign: 'left', color:"orange" }}>DOWNLOAD</h1>

          <div className="col" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            
            <div className="row" style={{marginBottom:"3%"}}>
              <img src={apple} alt="apple" style={{ width: '10rem', height: '3rem', marginLeft: '1rem' }}/>
              <img src={google} alt="google" style={{ width: '10rem', height: '3rem', marginLeft: '1rem' }}/>
              <img src={browser} alt="browser" style={{ width: '10rem', height: '3rem', marginLeft: '1rem' }}/>
            </div>
            </div>
          </div>
          </div>      
    </div>
  );
}

export default Main;
