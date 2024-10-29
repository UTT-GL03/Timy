import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/sample_data.json'

import {ScheduleXCalendar, useCalendarApp} from "@schedule-x/react"
import {createViewWeek} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'

function App() {
  const evenementsByRow = Object.values(
    Object.groupBy(data.evenements, (x, i) => Math.floor(i/7))
  )
  console.log(data)
 
  const calendar = useCalendarApp({
    views: [createViewWeek()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2024-10-29 00:00',
        end: '2024-10-29 02:00',
      },
    ],
    selectedDate: '2024-10-29'
  })
  return (
    <>

     <header>
        <h1>
          <img src={reactLogo}/>
          Timy
        </h1>
      </header>
<div>
  <ScheduleXCalendar calendarApp={calendar}/>
</div>
      
       {/* 
      <main className="container">
      {evenementsByRow.map((x, i) =>
          <div key={i} className="grid">
            {x.map((y, j) =>
              <Event {...y} key={j} />
            )}
          </div>
        )}  
      </main>
      */}
    </>
  )
}

function Event({title, category, duration}) {
  return (
    <article>
      <header>
        <span className="tag"> {category} </span>
        <time> {duration} </time>
      </header>
      <h6>{title}</h6>
    </article>
  )
}

export default App
