import '../../../sass/bestsellers.scss'
import Slider1 from '../../sliders/slider_1';


export default function Bestsellers() {
  return (
    <section className="bestsellers">

      <div className="bestsellers-info">

        <h2 className="bestsellers-info__title">
          Bestsellers
        </h2>

        <button className="bestsellers-info__button button">
          Shop ALL
        </button>
      </div>

      <div className="bestsellers__slider">
        <Slider1 />
      </div>

    </section>
  )
}
