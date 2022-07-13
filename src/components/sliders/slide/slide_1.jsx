import '../../../sass/slide.scss';


export default function Slide1() {
  return (
    <div className="slide">

      <img className="slide__img" src='./imgs/card_1.png' alt='bestseller №1' />

      <button className="slide__button button">
        Add to cart
      </button>

      <h3 className="slide__title">
        Aroma Diffuser
      </h3>

      <p className="slide__info">
        Original product comes in three styles of color, usb charger
      </p>

      <p className="slide__price">
        $ 20
      </p>
    </div>
  )
}
