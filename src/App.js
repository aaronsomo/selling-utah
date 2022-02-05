import React, { useRef } from 'react';
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
  const navCheckbox = useRef(null);
  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          ref={navCheckbox}
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="#about"
                className="navigation__link"
                onClick={() => (navCheckbox.current.checked = false)}
              >
                about
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#features"
                className="navigation__link"
                onClick={() => (navCheckbox.current.checked = false)}
              >
                why we should go
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#tours"
                className="navigation__link"
                onClick={() => (navCheckbox.current.checked = false)}
              >
                things to do
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#stories"
                className="navigation__link"
                onClick={() => (navCheckbox.current.checked = false)}
              >
                testimonials
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#book"
                className="navigation__link"
                onClick={() => (navCheckbox.current.checked = false)}
              >
                book now
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
            <span className="heading-primary--main">utah</span>
            <span className="heading-primary--sub">pls?</span>
          </h1>
          <a href="#tours" className="btn btn--white btn--animated">
            just look at things we can do~
          </a>
        </div>
      </header>

      <main>
        <section className="section-about" id="about">
          <div className="center-text margin-bottom-big">
            <h2 className="heading-secondary">
              exciting things to do for adventurous ppl
            </h2>
          </div>
          <div className="section-about__grid">
            <div>
              <h3 className="heading-tertiary margin-bottom-small">
                you're going to have a new perspective after surviving angels landing
              </h3>
              <div className="paragraph">
                imagine all of the instagram photos you could have on top of hiking trail peaks and in-between valleys. my last post was 2 years ago (thanks covid) so i need something new
              </div>
              <h3 className="heading-tertiary margin-bottom-small">
                live adventures like you never have before
              </h3>
              <div className="paragraph">
                i mean c'mon look at the nature. jk i can camp like two days max, but after that, ya boi needs a shower and toilet. this would be done with airbnb.
              </div>
              <button className="btn-text">learn more &rarr;</button>
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
                i got lost in iceland and if i can find my way back from literally the middle of nowhere, i can do this. we can do this.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary margin-bottom-small">
                Meet nature
              </h3>
              <p className="feature-box__text">
                ooooooo~
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertiary margin-bottom-small">
                Find your way
              </h3>
              <p className="feature-box__text">
                literally found my way in an entirely different country, we'll be fine here.
              </p>
            </div>
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertiary margin-bottom-small">
                Live a healthier life
              </h3>
              <p className="feature-box__text">
                ima need to get back into shape for something like this so ~motivation~
              </p>
            </div>
          </div>
        </section>

        <section className="section-tours" id="tours">
          <div className="center-text margin-bottom-big">
            <h2 className="heading-secondary">not limited to this list, but interest check</h2>
          </div>
          <div className="section-tours__grid">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    river tubing and swimming
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>2 hours</li>
                    <li>water fun</li>
                    <li>requires getting in/out water</li>
                    <li>difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$25</p>
                  </div>
                  <a href="https://zionoutfitter.com/virgin-river-tubing/" className="btn btn--white">
                    book now!
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    snowboarding and skiing
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>snowboarding~</li>
                    <li>skiing</li>
                    <li>snowboarding~~</li>
                    <li>we could also do colorado</li>
                    <li>difficulty: idk</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$ngl kinda expensive</p>
                  </div>
                  <a href="https://www.eaglepointresort.com/nearby-attractions/zion-national-park" className="btn btn--white">
                    book now!
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    hiking angel's landing
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>reason aaron wants to go</li>
                    <li>scale cliffs with rope</li>
                    <li>tour "guides"</li>
                    <li>can do in a day</li>
                    <li>difficulty: hard/extremely hard</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$an ankle or two, maybe your life</p>
                  </div>
                  <a href="https://wildlandtrekking.com/trips/angels-landing-day-hike/" className="btn btn--white">
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="center-text margin-top-huge">
            <button className="btn btn--green">boredom is impossible!!</button>
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
              look at these testimonials!
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
                  WOW! my life is different now bc i survived angels landing
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
                        small group
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
                        large group
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green">next step &rarr;</button>
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
                    company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    contact aaron, you have his number
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    careers: sike lmao
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    privacy policy: basically don't die pls
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#start" className="footer__link">
                    terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column">
            <p className="footer__copyright">
              made in like 2 hours by yours truly
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
              start booking now
            </h2>
            <h3 className="heading-tertiary margin-bottom-small">
              important &ndash; please read these terms before booking
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
            <button className="btn btn--green">book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
