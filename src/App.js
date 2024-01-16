import './App.css';
import Model from './model/Model';
import Kiegeszito from './Kiegeszito';
import { useState } from 'react';



function App() {
  const model = new Model();
  const [pont, setPont] = useState(0);
  const [mondatSplit, setModatSplit] = useState(model.getMondat());
  const [alap, setAlap] = useState(model.getAlap());
  const [index, setIndex2] = useState(3);
  const [helyes, setHelyes] = useState(model.getHelyes())

  function kovetkezo() {
    const valasz = document.getElementById("valasz").value;
    console.log(helyes);
    if (index > model.getHossz()) {
      setIndex2(2);
    } else{
      setIndex2(index + 1);
    }
    if(valasz == helyes){
      setPont(pont+1);
    }

    model.setIndex(index);
    setModatSplit(model.getMondat());
    setAlap(model.getAlap());
    setHelyes(model.getHelyes());
    document.getElementById('valasz').value = "";
  }


  return (
    <div className="App">
      <header className="App-header"><h2>Tanuljunk Angolul</h2></header>
      <h3>{model.getCim()}</h3>
      <h3>Gépeld be a megfelelő alakot</h3>
      <Kiegeszito tomb={mondatSplit} alap={alap} />
      <br />
      fghjkléáű
      
      <h3>Pontok: {pont}</h3>
    </div>
  );
}

export default App;
