import './App.css';
import AnimationComp from './components/animationComp';
import Footer from './components/footer';
import BodyOne from './components/bodyOne';
import BodyTwo from './components/bodyTwo';
import HeroComp from './components/heroComp';

function App() {
  return (
    <div className="App">
      <HeroComp/>
      <BodyOne/>
      <BodyTwo/>
      <AnimationComp/>
      <Footer/>
    </div>
  );
}

export default App;
