import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useRef} from 'react';

function App() {
  const ref = useRef(null);

  const [test,setTest] = useState({"4902102107648":3,"4902102151566":2})
  const [input,setInput] = useState("")
  const handleScan = (e) => {
    const inputValue = e.target.value
    setInput(inputValue)
    // もし改行が入っていたらそこまでに入っている文字を値として入力
    if (inputValue.includes("\n")) {
      setInput("")
      const newDict = test;
      test[Number(inputValue)] -= 1
      setTest(newDict);
    }
  }

  const hundleClick = () => {
    ref.current.focus();
  }


  return (
    <div className="App">
      <div>
        <h2>スキャン一覧</h2>
      {Object.keys(test).map(barcode => (
        <h3 key={barcode}>{barcode}: {test[barcode]}</h3>
      ))}
      </div>
      <button onClick={() => hundleClick()}>操作完了とかのボタン</button>
      <div style={{ opacity: 0 }}>
      <textarea autoFocus={true} ref={ref} value={input} onChange={(e) => handleScan(e)}/>
      </div>
    </div>
  );
}

export default App;
