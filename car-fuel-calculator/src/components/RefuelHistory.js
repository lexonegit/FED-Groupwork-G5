import React from 'react'

export const RefuelHistory = () => {
  return (
    <>
      <h3>Refuel History</h3>
      <ul className='list'>
          <li className='minus'>
              Car 1<span>120€</span><button className='delete-btn'>x</button>
          </li>
      </ul>
    </>
  )
}
