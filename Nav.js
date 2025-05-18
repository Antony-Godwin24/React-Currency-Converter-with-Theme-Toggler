import React from 'react'

const Nav = ({theme,toggleTheme}) => {
  return (
    <div class="nav" id={theme}>
        <h1>CurrencyConverter</h1>
        <div class="tgl">
            <button onClick={toggleTheme} class="btn btn-outline-light">Toggle</button>
        </div>
    </div>
  )
}

export default Nav