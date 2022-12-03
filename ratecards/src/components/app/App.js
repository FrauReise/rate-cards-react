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
          <Tarif tarif={tarif.tarif} speed={rate.speed} currency={rate.currency} period={rate.period} classHeader={rate.classHeader} classBody={rate.classBody} classTarif={rate.classTarif}></Tarif>
          )
        }
    </div>
  );
}

export default App;