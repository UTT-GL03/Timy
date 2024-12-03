import reactLogo from './assets/react.svg'
import './App.css'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { ScheduleXCalendar } from "@schedule-x/react"
import { createViewDay, createViewMonthGrid, createViewMonthAgenda,createViewWeek, createCalendar } from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/calendar.css'

import { useState, useEffect } from 'react'

const eventsServicePlugin = createEventsServicePlugin();

function App() {
  const calendar = createCalendar(
    { 
      views: [createViewWeek(), createViewMonthGrid(), createViewMonthAgenda(), createViewDay()],
    },
    [eventsServicePlugin]
  )

  useEffect(() => {
    // Calculer les dates de début et de fin pour une période de 7 jours
    const today = new Date();
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(today.getDate() + 7);
  
    // Formater les dates pour correspondre au format "YYYY-MM-DD" dans CouchDB
    const startDate = today.toISOString().split('T')[0]; // Format YYYY-MM-DD
    const endDate = sevenDaysLater.toISOString().split('T')[0]; // Format YYYY-MM-DD
    // Effectuer la requête Mango avec le filtre sur la période
    fetch('http://localhost:5984/evenements/_find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        selector: {
          date: {
            $gte: startDate, // Date de début
            $lt: endDate,    // Date de fin
          },
          creator: {
            $eq: "Ayoub",
          },
        },
        limit: 250,
        fields: ["_id", "title", "date", "beginning", "duration", "creator"], // Récupérer les champs nécessaires
      }),
    })
    
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        // Transformer les données pour les adapter au format du calendrier
        const events = data.docs.map((event) => {
          const startDateTime = `${event.date} ${event.beginning}`;
          const endDateTime = calculateEndDateTime(event.date, event.beginning, event.duration);
  
          return {
            id: event._id, // Utilise l'ID unique de CouchDB
            title: event.title,
            start: startDateTime,
            end: endDateTime,
          };
        });
  
        console.log(calendar);
        calendar.eventsService.set(events); // Mettre à jour les événements du calendrier
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error);
      });
  }, []);  // Le tableau vide [] signifie que useEffect s'exécute une seule fois au montage

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
