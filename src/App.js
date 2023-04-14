import './App.css';
import { BalanceIndicator } from './components/BalanceIndicator';
import { TotalIndictoar } from './components/TotalIndicator';
import { Chart } from './components/Chart';

let data = [
  { color: "hsl(186, 34%, 60%)", day: "Mon", amount: 500},
  { color: "hsl(10, 79%, 65%)", day: "Tues", amount: 333.3},
  { color: "hsl(10, 79%, 65%)", day: "Wed", amount: 244.3},
  { color: "hsl(10, 79%, 65%)", day: "Thurs", amount: 893.3},
  { color: "hsl(10, 79%, 65%)", day: "Fri", amount: 753.3},
  { color: "hsl(10, 79%, 65%)", day: "Sat", amount: 684.3},
  { color: "hsl(10, 79%, 65%)", day: "Sun", amount: 103.3},

]

function App() {

  const getCurrentMonthTotal = (someData) => {
    return someData.reduce((total,item) => {
      return total + item.amount
    },0)
  }

  const getCurrentBalance = (currentMonthTotal, currentBalance) => {
    return currentMonthTotal + currentBalance;
  }

  let currentMonthTotal = getCurrentMonthTotal(data);
  let currentBalance = getCurrentBalance(currentMonthTotal,500)
  
  return (
    <div className="App">
      <BalanceIndicator balance={currentBalance}></BalanceIndicator>
      <Chart 
        maxBarHeight={300}
        spendingData={data} 
        maxAmount={1000}></Chart>
      <TotalIndictoar 
        currentMonthTotal={currentMonthTotal} 
        lastMonthTotal={400.88}></TotalIndictoar>
    </div>
  );
}

export default App;
