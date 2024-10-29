import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/sample_data.json'

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react"
import { createViewWeek } from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'

function App() {
  // Transforme les données du fichier JSON pour les adapter au format du calendrier
  const calendarEvents = data.evenements.map((event, index) => {
    const startDateTime = `${event.date} ${event.beginning}`; // combine date et beginning pour la date de début
    const endDateTime = calculateEndDateTime(event.date, event.beginning, event.duration); // Calcule la date de fin

    return {
      id: String(index + 1), // Id unique pour chaque événement
      title: event.title,
      start: startDateTime,
      end: endDateTime,
    }
  });

  const calendar = useCalendarApp({
    views: [createViewWeek()],
    events: calendarEvents,
    selectedDate: '2024-10-30'
  });

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
