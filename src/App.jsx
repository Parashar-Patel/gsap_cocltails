import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktail from "./components/Cocktail";
import Lenis from 'lenis'


const lenis = new Lenis({
  autoRaf: true,
  smooth: true,
  duration: 1.8,
  lerp : 1,
  syncTouch: true,
});
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail/>
    </main>
  );
};

export default App;
