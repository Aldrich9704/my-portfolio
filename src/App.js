import logo from './logo.svg';
import './App.css';
import './home.css';
import Home from './Home';
import About from './About';
import Exp from './Exp';

function App() {
  return (
    <div className="App">
            <h1 className = "title"><span className="highlight_lb">CHRISTIAN</span> <span className="highlight">MINTARAGA</span></h1>
            <Home/>
            <About/>
            <Exp/>

            <h1 className= "contactme">CONTACT ME</h1>
            <footer>
              

              <div className="contactinfo">
                <img src="Gmail_icon_(2020).svg.png" alt="GMail" className="contacticon"/>
                <p>mintaragachristian@gmail.com</p>
              </div>

              <div className="contactinfo">
                <img src="Microsoft_Office_Outlook_(2018–present).svg.png" alt="Outlook" className="contacticon"/>
                <p>mintaragachristian@outlook.com</p>
              </div>

              <div className="contactinfo">
                <img src="WhatsApp_icon.png" alt="WhatsApp" className="contacticon"/>
                <p>+62-822-9988-9388</p>
              </div>

              <div className="contactinfo">
                <img src="LinkedIn_logo_initials.png" alt="LinkedIn" className="contacticon"/>
                <a href="https://www.linkedin.com/in/christian-mintaraga/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>

              <div className="contactinfo">
                <img src="kaggle icon.webp" alt="Kaggle" className="contacticon"/>
                <a href="https://www.kaggle.com/christianmintaraga" target="_blank" rel="noopener noreferrer">Kaggle</a>
              </div>

              <div className="contactinfo">
                <img src="github logo.png" alt="GitHub" className="contacticon"/>
                <a href="https://github.com/Aldrich9704" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

              
            </footer>
        </div>
  );
}

export default App;
