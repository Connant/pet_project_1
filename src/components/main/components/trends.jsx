import '../../../sass/bestsellers.scss'
import Slider2 from '../../sliders/slider_2';


export default function Trends() {
  return (
    <section className="trends">

      <div className="bestsellers-info">

        <h2 className="bestsellers-info__title">
        Trends
        </h2>

        <button className="bestsellers-info__button button">
          Shop all
        </button>
      </div>

      <div className="bestsellers__slider">
        <Slider2 />
      </div>

    </section>
  )
}
