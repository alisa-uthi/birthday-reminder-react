import React, {useState} from 'react'
import {data} from '../data'
import './BirthdayReminder.css'

const BirthdayReminder = () => {
  const [numPeople, setNumPeople] = useState(5)
  const [people, setPeople] = useState(data)

  const clearPeople = () => {
    setPeople([])
    setNumPeople(0)
  }

  return (
    <section className="reminder-section">
      <h1>{numPeople} birthdays today</h1>
      {
        people.map(person => {
          let {imgUrl, name, age} = person
          return (
            <article className="person">
              <img src={imgUrl} alt={name}/>
              <h3 className="name">{name}</h3>
              <h5 className="age">{age} Years</h5>
            </article>
          )
        })
      }
      <button className="btn" onClick={clearPeople}>
        clear all
      </button>
    </section>
  )
}

export default BirthdayReminder
