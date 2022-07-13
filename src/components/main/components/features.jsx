import '../../../sass/features.scss'


export default function Features() {

  return (
    <section className="features">
      <ul className="features-list">

        <li className="features-list__item">
            <img className='features-list__img' src="./imgs/img_1.svg" alt="Essential oils" />
          <h3 className="features-list__title">
            Essential oils
          </h3>
        </li>

        <li className="features-list__item">
            <img className='features-list__img' src="./imgs/img_2.svg" alt="Natural cosmetics" />
          <h3 className="features-list__title">
            Natural cosmetics
          </h3>
        </li>

        <li className="features-list__item">
            <img className='features-list__img' src="./imgs/img_3.svg" alt="Diffusers" />
          <h3 className="features-list__title">
            Diffusers
          </h3>
        </li>

        <li className="features-list__item">
            <img className='features-list__img' src="./imgs/img_4.svg" alt="Aromatherapy" />
          <h3 className="features-list__title">
            Aromatherapy
          </h3>
        </li>

      </ul>
    </section>
  )
}
