import '../../../sass/slide.scss';


export default function Slide3() {
  return (
    <div className="slide">

      <img className="slide__img" src='./imgs/card_3.png' alt='bestseller №1' />

      <button className="slide__button button">
        Add to cart
      </button>

      <h3 className="slide__title">
        Basket INNER BEAUTY
      </h3>

      <p className="slide__info">
        Luminescent Nutritive Serum, Rose Petal Hydrosol Mist  and Nourish Mud Cleanser.
      </p>

      <p className="slide__price">
        $ 64,95
      </p>
    </div>
  )
}
