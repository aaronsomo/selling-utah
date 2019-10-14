import React from 'react';
import logo from './assets/logo-white.png';
import logo1x from './assets/logo-green-1x.png';
import logo2x from './assets/logo-green-2x.png';
import logoSmall1x from './assets/logo-green-small-1x.png';
import logoSmall2x from './assets/logo-green-small-2x.png';
import pictureNat1 from './assets/nat-1-large.jpg';
import pictureNat1Small from './assets/nat-1.jpg';
import pictureNat2 from './assets/nat-2-large.jpg';
import pictureNat2Small from './assets/nat-2.jpg';
import pictureNat3 from './assets/nat-3-large.jpg';
import pictureNat3Small from './assets/nat-3.jpg';
import pictureNat8 from './assets/nat-8.jpg';
import pictureNat9 from './assets/nat-9.jpg';
import backgroundVideoMP4 from './assets/video.mp4';
import backgroundVideoWebm from './assets/video.webm';
import './App.scss';

function App() {
  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#about" className="navigation__link">
                <span>01</span>About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href="#features" className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#tours" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#stories" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#book" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header" id="start">
        <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <button className="btn btn--white btn--animated">
            discover our tours
          </button>
        </div>
      </header>

      <main>
        <section className="section-about" id="about">
          <div className="center-text margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>
          <div className="section-about__grid">
            <div>
              <h3 className="heading-tertiary margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <div className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                a maiores in nisi, aspernatur asperiores facere debitis quisquam
                quam officia eveniet, veritatis perspiciatis cumque
              </div>
              <h3 className="heading-tertiary margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <div className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                a maiores in nisi, aspernatur asperiores facere debitis quisquam
                quam officia eveniet, veritatis perspiciatis cumque ex deleniti
                doloremque. Necessitatibus, provident aut.
              </div>
              <button className="btn-text">Learn more &rarr;</button>
            </div>
            <div className="composition">
              <img
                srcSet={`${pictureNat1Small} 300w, ${pictureNat1} 1000w`}
                sizes={`(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px`}
                alt={`1`}
                className={`composition__photo composition__photo--p1`}
                src={`${pictureNat1}`}
              />

              <img
                srcSet={`${pictureNat2Small} 300w, ${pictureNat2} 1000w`}
                sizes={`(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px`}
                alt={`2`}
                className={`composition__photo composition__photo--p2`}
                src={`${pictureNat2}`}
              />

              <img
                srcSet={`${pictureNat3Small} 300w, ${pictureNat3} 1000w`}
                sizes={`(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px`}
                alt={`3`}
                className={`composition__photo composition__photo--p3`}
                src={`${pictureNat3}`}
              />
            </div>
          </div>
        </section>

        <section className="section-features" id="features">
          <div className="section-features__grid">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary margin-bottom-small">
                Explore the world
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary margin-bottom-small">
                Meet nature
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertiary margin-bottom-small">
                Find your way
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertiary margin-bottom-small">
                Live a healthier life
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </section>

        <section className="section-tours" id="tours">
          <div className="center-text margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>
          <div className="section-tours__grid">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Book now!
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    The Forest Hiker
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>7 day tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$497</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Book now!
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    The Snow Adventurer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>5 day tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$897</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Book now!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="center-text margin-top-huge">
            <button className="btn btn--green">Discover all tours</button>
          </div>
        </section>

        <section className="section-stories" id="stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={backgroundVideoMP4} type="video/mp4" />
              <source src={backgroundVideoWebm} type="video/webm" />
              Your browser is not supported!
            </video>
          </div>

          <div className="center-text margin-bottom-big max-width-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>

          <div className="section-stories__container">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={pictureNat8}
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div className="section-stories__container">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={pictureNat9}
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary margin-bottom-small">
                  WOW! My life is different now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div className="center-text margin-top-huge">
            <button className="btn-text">Read all stories &rarr;</button>
          </div>
        </section>

        <section className="section-book" id="book">
          <div className="section-book__container">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full name"
                      id="name"
                      autoComplete="off"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      autoComplete="off"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>

                  <div className="form__group margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                        required
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                        required
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source
              srcSet={`${logoSmall1x} 1x, ${logoSmall2x} 2x`}
              media="(max-width: 37.5em)"
            />
            <img
              srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              alt="Full logo"
              src={logo2x}
            />
          </picture>
        </div>
        <div className="footer__grid">
          <div className="footer__column">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column">
            <p className="footer__copyright">
              Built by João Forja. Design made by Jonas Schmedtmann.
            </p>
          </div>
        </div>
      </footer>

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={pictureNat8} alt="Tour photo1" className="popup__img" />
            <img src={pictureNat9} alt="Tour photo2" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <button className="btn btn--green">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
