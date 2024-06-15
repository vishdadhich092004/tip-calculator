import { useState } from "react";
import BillInput from "./BillInput";
import TipSelector from "./TipSelector";
import TotalBill from "./TotalBill";
import './index.css'
function App() {
  const [bill, setBill] = useState('');
  function handleBillInput(e) {
    setBill(Number(e.target.value));
  }
  const [tip1, setTip1] = useState(0);
  function handleTipSelector1(e) {
    setTip1(Number(e.target.value));
  }
  const [tip2, setTip2] = useState(0);
  function handleTipSelector2(e) {
    setTip2(Number(e.target.value));
  }
  return (
    <div className="app">
      <BillInput bill={bill} onBillInput={handleBillInput}>What i s the bill amount ? </BillInput>
      <TipSelector tip1={tip1} onTipSelection={handleTipSelector1}>Tip you would like to give ? </TipSelector>
      <TipSelector tip2={tip2} onTipSelection={handleTipSelector2}>Tip your friend would like to give ? </TipSelector>
      <TotalBill tip1={tip1} tip2={tip2} bill={bill} />
    </div>
  )
}

export default App;
