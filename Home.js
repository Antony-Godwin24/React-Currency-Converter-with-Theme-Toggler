import React from 'react'

const Home = ({from,to,setFrom,setTo,result,handleConvert,amount,setAmount,theme}) => {
  return (
    <div class="hme">
        <div class="head">
            <h1>CurrencyConverter</h1>
            <p>Your smart solution for global currency conversion.</p>
        </div>
        <div class="content">
            <div class="dropdown">
                <div class="from">
                        <button
                        class="btn btn-outline-primary dropdown-toggle"
                        type="button"
                        id="fromMenu"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        
                        {from===''? ('Selct From Currency'):(from)}
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="currencyMenu">
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('INR – Indian Rupee')}>INR – Indian Rupee</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('USD – US Dollar')}>USD – US Dollar</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('EUR – Euro')}>EUR – Euro</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('GBP – British Pound')}>GBP – British Pound</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('JPY – Japanese Yen')}>JPY – Japanese Yen</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('AUD – Australian Dollar')}>AUD – Australian Dollar</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('CAD – Canadian Dollar')}>CAD – Canadian Dollar</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('CHF – Swiss Franc')}>CHF – Swiss Franc</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('CNY – Chinese Yuan')}>CNY – Chinese Yuan</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setFrom('SGD – Singapore Dollar')}>SGD – Singapore Dollar</button></li>
                    </ul>

                </div>
                <div class="to">
                    <button
                        class="btn btn-outline-primary dropdown-toggle"
                        type="button"
                        id="toMenu"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {to===''? ('Select To Currency'):(to)}
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="currencyMenu">
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('INR – Indian Rupee')}>INR – Indian Rupee</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('USD – US Dollar')}>USD – US Dollar</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('EUR – Euro')}>EUR – Euro</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('GBP – British Pound')}>GBP – British Pound</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('JPY – Japanese Yen')}>JPY – Japanese Yen</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('AUD – Australian Dollar')}>AUD – Australian Dollar</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('CAD – Canadian Dollar')}>CAD – Canadian Dollar</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('CHF – Swiss Franc')}>CHF – Swiss Franc</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('CNY – Chinese Yuan')}>CNY – Chinese Yuan</button></li>
                        <li><button class="dropdown-item" type="button" id="frm" onClick={()=>setTo('SGD – Singapore Dollar')}>SGD – Singapore Dollar</button></li>
                    </ul>

                </div>
            </div>
            <div class="btn">
                <input type="number" class="form-control"  placeholder='Enter the amount to convert' required value={amount} onChange={(e)=>setAmount(e.target.value)} />

                {amount===''?(<button id="non">None</button>):(<button class="btn btn-outline-primary" id="conv" onClick={handleConvert}>Convert</button>)}
            </div>
            <div class="result">
                {amount==='' || from==='' || to==='' ?(<button id="non">None</button>):(<input type='text' class="form-control" placeholder='Result will be displayed here' value={Number(result).toFixed(2)} />)}
            </div>
        </div>
    </div>
  )
}

export default Home