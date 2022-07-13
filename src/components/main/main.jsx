
import '../../sass/common.scss'
import Header from '../header';
import Intro1 from './components/intro_1';
import Features from './components/features';
import Intro2 from './components/intro_2';
import Bestsellers from './components/bestsellers';
import Intro3 from './components/intro_3';
import Blog from './components/blog';
import Trends from './components/trends';
import Footer from '../footer';


export default function Main() {

  return (

    <div className="wrapper">
      <Header />
      <Intro1 />
      <Features />
      <Intro2 />
      <Bestsellers />
      <Intro3 />
      <Blog />
      <Trends />
      <Footer />
    </div>

  )

}
