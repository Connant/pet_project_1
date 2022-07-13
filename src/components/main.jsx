import Blog from "./blog";
import Features from "./features";
import Footer from "./footer";
import Header from "./header";
import Intro1 from "./intro_1";
import Intro2 from "./intro_2";
import Intro3 from "./intro_3";
import Slider1 from "./slider_1";


export default function Main() {

  return (

    <div>
      <Header />
      <Intro1 />
      <Features />
      <Intro2 />
      <Slider1 />
      <Intro3 />
      <Blog />
      <Footer />
    </div>

  )

}
