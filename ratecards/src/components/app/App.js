import './App.css';
import style from './style/Rate.scss'
import Rate from './components/rate/Rate';
import data from '../../data/data.json';



let rates = JSON.parse(rateJSON);
    
function App() {
  return (
    <div className="App">
      {
        rates.map((rate) =>
          <Rate rate={rate.rate} speed={rate.speed} currency={rate.currency} period={rate.period} classHeader={rate.classHeader} classBody={rate.classBody} classRate={rate.classRate}></Rate>
          )
        }
    </div>
  );
}

export default App;