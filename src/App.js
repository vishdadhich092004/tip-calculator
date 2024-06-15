import BillInput from "./BillInput";
import TipSelector from "./TipSelector";
import TotalBill from "./TotalBill";
import './index.css'
function App() {
  return (
    <div className="app">
      <BillInput>What is the bill amount ? </BillInput>
      <TipSelector>Tip you would like to give ? </TipSelector>
      <TipSelector>Tip your friend would like to give ? </TipSelector>
      <TotalBill />
    </div>
  )
}

export default App;
