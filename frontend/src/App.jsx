import reactLogo from './assets/react.svg'
import './App.css'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { ScheduleXCalendar } from "@schedule-x/react"
import { createViewWeek, createCalendar } from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'

import { useState, useEffect } from 'react'

const eventsServicePlugin = createEventsServicePlugin();

function App() {
  const calendar = createCalendar(
    { 
      views: [createViewWeek()],
      //selectedDate: '2024-10-30' 
    },
    [eventsServicePlugin]
  )
  // const [calendarEvents, setCalendarEvents] = useState([]);
  //console.log("Événements du calendrier :", calendarEvents);
  useEffect(() => {
    fetch('/sample_data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        
        // Transformer les données pour les adapter au format du calendrier
        const events = data.evenements.map((event, index) => {
          const startDateTime = `${event.date} ${event.beginning}`;
          const endDateTime = calculateEndDateTime(event.date, event.beginning, event.duration);

          return {
            id: String(index + 1),
            title: event.title,
            start: startDateTime,
            end: endDateTime,

          }
        });
        console.log(calendar);
        calendar.eventsService.set(events);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error);
      });
  }, []); // Le tableau vide [] signifie que useEffect s'exécute une seule fois au montage

  // Créer l'application de calendrier une fois que les événements sont prêts
 

  return (
    <>
      <header>
        <h1>
          <img src={reactLogo} alt="React Logo" />
          Timy
        </h1>
      </header>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  );
}

// Fonction pour calculer la date et l'heure de fin d'un événement
function calculateEndDateTime(date, beginning, duration) {
  const [startHour, startMinute] = beginning.split(':').map(Number);
  const [durationHour, durationMinute] = duration.split(':').map(Number);

  const startDate = new Date(`${date}T${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`);
  startDate.setHours(startDate.getHours() + durationHour, startDate.getMinutes() + durationMinute);

  const endHour = String(startDate.getHours()).padStart(2, '0');
  const endMinute = String(startDate.getMinutes()).padStart(2, '0');
  return `${date} ${endHour}:${endMinute}`;
}

export default App;
