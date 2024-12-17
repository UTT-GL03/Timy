import reactLogo from './assets/react.svg'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { ScheduleXCalendar } from "@schedule-x/react"
import { createViewDay, createViewMonthGrid, createViewMonthAgenda,createViewWeek, createCalendar } from '@schedule-x/calendar'
import { createCurrentTimePlugin } from '@schedule-x/current-time'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import '@schedule-x/theme-default/dist/calendar.css'
import '@schedule-x/theme-default/dist/index.css'
import './App.css'



import { useState, useEffect } from 'react'

const eventsServicePlugin = createEventsServicePlugin();
const currentTimePlugin = createCurrentTimePlugin();
const eventModal = createEventModalPlugin()

function App() {
// État pour gérer l'affichage du pop-up
const [isPopupVisible, setIsPopupVisible] = useState(false);
const [eventData, setEventData] = useState({
  title: '',
  date: '',
  beginning: '',
  duration: '',
  location: '',
  creator: '',
  description: '',
  guest: '',
});

// Fonction pour ouvrir/fermer le pop-up
const togglePopup = () => {
  setIsPopupVisible((prevState) => {
    const newState = !prevState; // Inverser l'état actuel
    if (newState === false) {
      window.location.reload(); // Rafraîchir la page uniquement si l'état est true
    }
    return newState;
  });
};

// Fonction pour gérer les changements dans le formulaire
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEventData({ ...eventData, [name]: value });
};

// Fonction pour soumettre le formulaire
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5984/evenements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      window.location.reload(); // Rafraîchit la page
      togglePopup(); // Ferme le pop-up après la soumission
      setEventData({
        title: '',
        category: '',
        date: '',
        beginning: '',
        duration: '',
        location: '',
        creator: '',
        description: '',
        guest: '',
      }); // Réinitialise le formulaire
    } else {
      console.error('Erreur lors de l’ajout de l’événement :', await response.text());
    }
  } catch (error) {
    console.error('Erreur lors de l’ajout de l’événement :', error);
  }
};


const calendar = createCalendar(
    { 
      views: [createViewWeek(), createViewMonthGrid(), createViewMonthAgenda(), createViewDay()],
      locale: 'fr-FR',
    },
    [eventsServicePlugin, currentTimePlugin, eventModal]
  )

  eventModal.close();

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

 
  return (
    <>
      <header>
        <h1>
          <img src={reactLogo} alt="React Logo" />
          Timy
          {/* Bouton pour afficher le pop-up */}
      <button  className="add-event-button" onClick={togglePopup}>Ajouter un événement</button>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Créer un événement</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Titre :
                <input
                  type="text"
                  name="title"
                  value={eventData.title}
                  onChange={handleInputChange}
                  required
                />
              </label>


              <label>
                Categorie :
                <input
                  type="text"
                  name="category"
                  value={eventData.category}
                  onChange={handleInputChange}
                />
              </label>


              <label>
                Date :
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Heure de début :
                <input
                  type="time"
                  name="beginning"
                  value={eventData.beginning}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Durée (HH:MM) :
                <input
                  type="text"
                  name="duration"
                  value={eventData.duration}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Lieu :
                <input
                  type="text"
                  name="location"
                  value={eventData.location}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Créateur :
                <input
                  type="text"
                  name="creator"
                  value={eventData.creator}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description :
                <textarea
                  name="description"
                  value={eventData.description}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Invité :
                <input
                  type="email"
                  name="guest"
                  value={eventData.guest}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Ajouter</button>
              <button type="button" onClick={togglePopup}>
                Annuler
              </button>
            </form>
          </div>
        </div>
      )}
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
