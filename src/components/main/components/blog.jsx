import '../../../sass/blog.scss';

export default function Blog() {

  return (
    <section className="blog">

      <h2 className="blog__title">
        Blog
      </h2>

      <ul className="blog-list">

        <li className="blog-list__item">
          <img className="blog-list__img" src="./imgs/blog_1.png" alt="How to create your own essential oil" />

          <h3 className="blog-list__title">
            How to create your own essential oil diffuser blends

          </h3>

          <p className="blog-list__info">
            As you begin creating your own diffuser blends, it’s important to keep a few ...
          </p>
        </li>

        <li className="blog-list__item">
          <img className="blog-list__img" src="./imgs/blog_2.png" alt="7 easy oil-infused" />

          <h3 className="blog-list__title">
            7 easy oil-infused Mother’s Day gift ideas

          </h3>

          <p className="blog-list__info">
            Celebrate the mom in your life with these simple, handcrafted, heartfelt gifts!
          </p>
        </li>

        <li className="blog-list__item">
          <img className="blog-list__img" src="./imgs/blog_3.png" alt="Geranium Bourbon" />

          <h3 className="blog-list__title">
            Geranium Bourbon: Fresh, floral, sweet


          </h3>

          <p className="blog-list__info">
            Fill your space with a fresh, uplifting aroma reminiscent of a greenhouse in full ...
          </p>
        </li>

      </ul>

      <button className='blog__button button'>
        see all
      </button>
    </section>
  )
}
