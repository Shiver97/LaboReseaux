// Netlify Function pour récupérer le calendrier Google iCal
// Côté serveur = pas de problème CORS

const ICAL_URL = 'https://calendar.google.com/calendar/ical/gite.augrandcerf.grandvoir%40gmail.com/public/basic.ics';

exports.handler = async function(event, context) {
  try {
    const response = await fetch(ICAL_URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; GiteAuGrandCerf/1.0; +https://augrandcerf.netlify.app)',
        'Accept': 'text/calendar, text/plain, */*',
        'Accept-Language': 'fr-BE,fr;q=0.9,en;q=0.8'
      },
      redirect: 'follow'
    });
    
    if (!response.ok) {
      console.error('Google Calendar a répondu:', response.status, response.statusText);
      return {
        statusCode: response.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Erreur lors de la récupération du calendrier',
          status: response.status,
          statusText: response.statusText
        })
      };
    }
    
    const icalText = await response.text();
    
    // Vérifier que c'est bien un iCal valide
    if (!icalText.includes('BEGIN:VCALENDAR')) {
      return {
        statusCode: 502,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Réponse non valide de Google Calendar',
          preview: icalText.substring(0, 200)
        })
      };
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300' // Cache 5 minutes
      },
      body: icalText
    };
  } catch (error) {
    console.error('Erreur fetch:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Erreur serveur',
        message: error.message 
      })
    };
  }
};
