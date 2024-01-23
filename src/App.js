import logo from './logo.svg';
import './App.css';

import HelloWord from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import Blink from './components/Blink';
import Count from './components/Count'

function App() {
  return (
    <div className="App">
      <CaptionImage imgUrl="https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTRfMzEg/MDAxNjE4MzkzNzYyMTI3.2O_46TmKTYGbXMeu-W_9wdfAAw-tYLPzzRO2ZhB7hesg.iBmAqi17fck3tC4907gGaFIp1IalksYgIGCdjhhSuzAg.JPEG.eu2/1618393754909.jpg?type=w800" caption="ahahahahaha">
      </CaptionImage>

      <Blink text="ahahahaha">
      </Blink>

      <Count>
      </Count>

    </div>
  );
}

export default App;