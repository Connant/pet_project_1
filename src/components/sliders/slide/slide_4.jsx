import '../../../sass/slide.scss';


export default function Slide4() {
  return (
    <div className="slide">

      <img className="slide__img" src='./imgs/card_4.png' alt='bestseller №1' />

      <button className="slide__button button">
        Add to cart
      </button>

      <h3 className="slide__title">
        Uplift Handcrafted Soap Bar
      </h3>

      <p className="slide__info">
        Is a peaceful and balancing bar topped with calendula, dried rose petals and lavender.
      </p>

      <p className="slide__price">
        $ 7
      </p>
    </div>
  )
}
