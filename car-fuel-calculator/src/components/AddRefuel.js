import React, {useState} from 'react'

export const AddRefuel = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const [price, setPrice] = useState(0)

  return (
    <div>
      <h3>Add refuel information</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Car</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Enter car name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
              Amount of liters <br />
              </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." />
        </div>
        <div className="form-control">
            <label htmlFor="price">
                Money spent <br />
            </label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter cost..." />
        </div>
        <button className="btn">Add car</button>
      </form>
    </div>
  )
}
