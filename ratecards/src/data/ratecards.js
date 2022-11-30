let rateJSON = `[
    {
      "rate": "300",
      "speed": "10",
      "currency": "руб ",
      "period": "/мес",
      "classHeader": "blueHeader",
      "classBody": "blueBody",
      "classTarif": ""
    },
    {
      "rate": "450",
      "speed": "50",
      "currency": "руб ",
      "period": "/мес",
      "classHeader": "greenHeader",
      "classBody": "greenBody",
      "classTarif": ""
    },
    {
      "rate": "550",
      "speed": "100",
      "currency": "руб ",
      "period": "/мес",
      "classHeader": "redHeader",
      "classBody": "redBody",
      "classTarif": ""
    },
    {
      "rate": "1000",
      "speed": "200",
      "currency": "руб ",
      "period": "/мес",
      "classHeader": "blackHeader",
      "classBody": "blackBody",
      "classTarif": ""
    }
    ]
    `
    
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
    