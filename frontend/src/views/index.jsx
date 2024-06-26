import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../App.css';

const Home = ({ destination = '/' }) => {
    return (
        <div>
            <Link
        to={destination}
      ></Link>
        <div>
          <div className="work-hours">
          <FontAwesomeIcon icon={faClock} />
          <span>Lundi/Vendredi 09:00-18:00</span>
          <FontAwesomeIcon icon={faPhone} />
          <span>01321009</span>
          </div>
        </div>
        <header className="navbar">
          <div className="logo">
            <span className="logo-text"><Link to="/"><h2>E-Bank</h2></Link></span>
          </div>
          <nav>
            <ul>
              
              <li className="nav-item"><Link to="/login" className="filled-button"> Déja Client </Link></li>
            </ul>
          </nav>
        </header>
      <main>
        <div className="background-image">
          <div className="text-container">
            <h2>La rapidité à portée de clic avec E-Bank</h2>
            <Link to="/register" className="filled-button"> Devenir client </Link>
          </div>
        </div>
      <br></br>
      <div id="nosServices" className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Nos<em> Services</em></h2>
                <span>Nous avons une solution pour chacun de vos problèmes</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/service_01.jpg" alt="" />
                <div className="down-content">
                  <h4>Virements &amp; Transferts</h4>
                  <p>Découvrez notre service de virements et de transferts rapides, conçu pour vous offrir une expérience bancaire sans tracas. Avec notre plateforme en ligne sécurisée, vous pouvez effectuer des virements et des transferts instantanés en toute simplicité, où que vous soyez et à tout moment.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/service_02.jpg" alt="" />
                <div className="down-content">
                  <h4>Cartes Bancaires Personnalisées</h4>
                  <p>Que vous choisissiez la carte Visa Express, la carte Visa E-Premium, vous pourrez bénéficier d’avantages communs. Le plus dur sera de choisir ! Profitez également de fonctionnalités avancées telles que la sécurité renforcée, le suivi des dépenses en temps réel et bien plus encore. Obtenez dès maintenant votre carte bancaire personnalisée et commencez à vivre une expérience bancaire qui vous ressemble.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/service_03.jpg" alt="" />
                <div className="down-content">
                  <h4>Epargne &amp; Prêts</h4>
                  <p>Découvrez nos solutions d'épargne et de prêt flexibles pour façonner un avenir financier plus prometteur. Économisez en toute sécurité et accédez rapidement aux fonds dont vous avez besoin pour concrétiser vos projets. Explorez nos options dès aujourd'hui !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <footer>
        <p>&copy; 2024 E-Bank. Tous droits réservés.</p>
      </footer>
    </div>




)
};

export default Home