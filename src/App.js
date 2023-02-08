import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useState } from 'react';
import { budgetDetails } from './budgetDetails';

const options = {
  plugins:{
    legend:{
      position: 'top'
    },
    title:{
      display:true,
      text: 'Revenue & Expenditure value(s) in Trillion rupees '
    }

  },
  scales: {
      y: {
          max: 45,
          min: 15,
          ticks: {
              stepSize: 5,

          }
      }
  }
};


function App() {

  const [data,setData]  = useState({
    labels : budgetDetails.map((budget)=> budget.year),
    
    datasets :[
      { label: 'revenue',
        data: budgetDetails.map((budget)=> budget.revenue ),
        backgroundColor : 'skyblue'
      },
      {
        label : 'Expenditure',
        data : budgetDetails.map((budget)=> budget.revenue),
        backgroundColor: 'pink'
      }
    ]
  })
  return (
    <div className="App">
      <h2 style={{color: 'blue'}}> Union Budget of India from the last 10 Years </h2>
      <Bar data={data} options= {options} style={{width:'900px'}}/>
    </div>
  );
}

export default App;
