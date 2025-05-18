import './App.css';
import Home from './Home.js';
import React, {useEffect, useState} from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';

function App() {

  const [from,setFrom]=useState('');
  const [to,setTo]=useState('');
  const [amount,setAmount]=useState('');
  const [result,setResult]=useState('');
  const [theme,setTheme]=useState('light');

  useEffect(()=>{
    const saved=localStorage.getItem('theme') || 'light'
    setTheme(saved);
  },[])

  useEffect(()=>{
    document.body.className=theme
    localStorage.setItem('theme',theme)
  })

  const toggleTheme=()=>{
    setTheme(prev=>(prev==='light'?'dark':'light'));
  }

  const handleConvert = () => {
    if (!from || !to || amount === '') {
        alert('Please select both currencies and enter the amount to convert');
        return;
    }

    if (amount < 0) {
        alert('Amount cannot be negative!');
        return;
    }

    const fromCode = from.split(' – ')[0];
    const toCode = to.split(' – ')[0];

    if (fromCode === toCode) {
        setResult(amount);
        return;
    }

   const rates = {
        INR: { USD: 1 / 83, EUR: 1 / 89, GBP: 1 / 103, JPY: 1.75, AUD: 1 / 55, CAD: 1 / 60, CHF: 1 / 93, CNY: 1 / 11, SGD: 1 / 62 },
        USD: { INR: 83, EUR: 0.92, GBP: 0.81, JPY: 130, AUD: 1.5, CAD: 1.35, CHF: 0.91, CNY: 7.2, SGD: 1.34 },
        EUR: { INR: 89, USD: 1.09, GBP: 0.88, JPY: 140, AUD: 1.62, CAD: 1.46, CHF: 0.98, CNY: 7.9, SGD: 1.48 },
        GBP: { INR: 103, USD: 1.23, EUR: 1.14, JPY: 160, AUD: 1.82, CAD: 1.68, CHF: 1.11, CNY: 9.1, SGD: 1.67 },
        JPY: { INR: 1 / 1.75, USD: 1 / 130, EUR: 1 / 140, GBP: 1 / 160, AUD: 1 / 90, CAD: 1 / 96, CHF: 1 / 145, CNY: 1 / 18, SGD: 1 / 98 },
        AUD: { INR: 55, USD: 0.67, EUR: 0.62, GBP: 0.55, JPY: 90, CAD: 0.92, CHF: 0.61, CNY: 4.8, SGD: 0.91 },
        CAD: { INR: 60, USD: 0.74, EUR: 0.68, GBP: 0.60, JPY: 96, AUD: 1.09, CHF: 0.66, CNY: 5.2, SGD: 0.98 },
        CHF: { INR: 93, USD: 1.1, EUR: 1.02, GBP: 0.90, JPY: 145, AUD: 1.64, CAD: 1.52, CNY: 7.8, SGD: 1.49 },
        CNY: { INR: 11, USD: 0.14, EUR: 0.13, GBP: 0.11, JPY: 18, AUD: 0.21, CAD: 0.19, CHF: 0.13, SGD: 0.19 },
        SGD: { INR: 62, USD: 0.75, EUR: 0.68, GBP: 0.60, JPY: 98, AUD: 1.1, CAD: 1.02, CHF: 0.67, CNY: 5.3 }
    };

    const convert=rates[fromCode]?.[toCode]
    if(convert){
      setResult(convert*amount);
    }
    else{
      alert('Conversion not supported for the selected currencies');
    }
};



  return (
    <div className="App">
      <Nav 
      theme={theme}
      toggleTheme={toggleTheme}
      />
      <Home 
      from={from}
      to={to}
      setFrom={setFrom}
      setTo={setTo}
      result={result}
      handleConvert={handleConvert}
      amount={amount}
      setAmount={setAmount}
      theme={theme}
      />
      <Footer
      theme={theme}
      />
    </div>
  );
}

export default App;
