import './index.css'
import Texto from 'react-dom'
import React from 'react'

const tag = <strong> Olá React! Texto exemplo </strong>

Texto.render(
      <div>
        { tag }
      </div>, 
      document.getElementById("root"));
