import '../../../sass/slide.scss';


export default function Slide2() {
  return (
    <div className="slide">

      <img className="slide__img" src='./imgs/card_2.png' alt='bestseller №1' />

      <button className="slide__button button">
        Add to cart
      </button>

      <h3 className="slide__title">
        Lux Aroma Diffuser
      </h3>

      <p className="slide__info">
        Beautiful decorative object, perfumes the space with your favorite fragrance.
      </p>

      <p className="slide__price">
        $ 15
      </p>
    </div>
  )
}
