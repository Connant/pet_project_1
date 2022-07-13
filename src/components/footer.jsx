import '../sass/footer.scss'

export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer__main-content main-content">

        <div className="main-content__description description">

          <img src="./imgs/logo.svg" className="description__logo" alt="logo" />

          <p className="description__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, sit risus mattis erat fermentum.
          </p>

        </div>

        <div className='footer__lists'>

          <ul className="main-content__list support">
            <li className="main-content__item">Customer Support</li>
            <li className="main-content__item">Shipping</li>
            <li className="main-content__item">Free Returns</li>
            <li className="main-content__item">Track Your Order</li>
            <li className="main-content__item">Gift Cards</li>
          </ul>

          <ul className="main-content__list aboutus">
            <li className="main-content__item">About Us</li>
            <li className="main-content__item">Our Values</li>
            <li className="main-content__item">Sustainability</li>
            <li className="main-content__item">Brand Ambassadors</li>
            <li className="main-content__item">Fitness Professionals</li>
            <li className="main-content__item">Gap Inc. Sustainability</li>
          </ul>

          <ul className="main-content__list service">
            <li className="main-content__item">Customer Service</li>
            <li className="main-content__item">Help</li>
            <li className="main-content__item">Leader Support</li>
            <li className="main-content__item">Pleasant Grove Product Center</li>
            <li className="main-content__item">Recall—Important Safety Information</li>
          </ul>

        </div>
      </div>

      <div className="footer__secondary secondary">
        <span className="secondary__info">
          © 2022 Toutem All rights reserved. |&nbsp;
          <span>
            Terms and Conditions | Return policy
          </span>
        </span>

        <ul className="secondary__social-list social-list">
          <li className="social-list__item">
            <img src="./imgs/telegram.svg" alt="telegram" />
          </li>
          <li className="social-list__item">
            <img src="./imgs/instagram.svg" alt="instagram" />
          </li>
          <li className="social-list__item">
            <img src="./imgs/twitter.svg" alt="twitter" />
          </li>
          <li className="social-list__item">
            <img src="./imgs/facebook.svg" alt="facebook" />
          </li>
          <li className="social-list__item">
            <img src="./imgs/pinterest.svg" alt="pinterest" />
          </li>
        </ul>
      </div>
    </footer>
  )
}
