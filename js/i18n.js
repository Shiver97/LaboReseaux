// =====================================================
// I18N - FR / EN / NL
// =====================================================

(function () {
  'use strict';

  const SUPPORTED_LANGS = ['fr', 'en', 'nl'];
  const DEFAULT_LANG = 'fr';
  const STORAGE_KEY = 'siteLang';

  const TRANSLATIONS = {
    fr: {
      meta: {
        title: 'Gîte Au Grand Cerf – Grandvoir',
        description: "Gîte rural jusqu'à 15 personnes à Grandvoir, Ardennes belges. Location de vacances dans un cadre verdoyant.",
        ogLocale: 'fr_BE'
      },

      lang: {
        aria: 'Choix de la langue'
      },

      nav: {
        menu: 'Menu de navigation',
        home: 'Accueil',
        about: 'À propos',
        gite: 'Notre gîte',
        plus: 'Les "Plus"',
        gallery: 'Galerie',
        activities: 'Activités',
        prices: 'Tarifs',
        availability: 'Disponibilité',
        contact: 'Contact'
      },

      images: {
        logoAlt: 'Logo Gîte Au Grand Cerf'
      },

      about: {
        title: 'À propos',
        p1: "Bienvenue dans ce charmant gîte familial, entièrement rénové en 2020 pouvant accueillir jusqu'à 15 personnes dans le paisible village de Grandvoir.",
        p2: "Idéalement situé, à proximité de Neufchâteau, de Bertrix, du Parc Naturel de la forêt d'Anlier, il permet également de rejoindre rapidement Bouillon, Bastogne, Florenville...",
        p3: 'Entouré de verdure, les randonnées à pied ou à vélo sont nombreuses aux alentours.'
      },

      gite: {
        title: 'NOTRE GÎTE',
        rooms: "<strong>5 chambres :</strong><br>1 lit double<br>1 lit simple + 1 lit d'appoint<br>1 lit double + 1 lit simple<br>4 lits simples (possibilité de rassembler en 2 lits doubles)<br>1 lit double + 2 lits simples",
        details: "<strong>2 salles d'eau</strong> + 1 salle de bain<br><strong>3 WC indépendants</strong><br>1 salle de jeux<br>1 coin bar"
      },

      plus: {
        title: 'LES "PLUS"',
        garden: 'Jardin et terrain de pétanque',
        terrace: 'Grande terrasse plein sud',
        wifi: 'Wifi gratuit',
        gardenAlt: 'Jardin',
        terraceAlt: 'Terrasse',
        wifiAlt: 'Wifi'
      },

      gallery: {
        title: 'GALERIE',
        prev: 'Page précédente',
        next: 'Page suivante',
        defaultAlt: 'Photo du gîte'
      },

      galleryImages: {
        livingRoom: 'Salon',
        diningRoom: 'Salle à manger',
        kitchen: 'Cuisine',
        bar: 'Coin bar',
        gameRoom: 'Salle de jeux',
        bathroom: 'Salle de bain',
        bedroom1: 'Chambre 1',
        bedroom2: 'Chambre 2',
        bedroom3: 'Chambre 3',
        bedroom4: 'Chambre 4',
        bedroom5: 'Chambre 5',
        window: 'Fenêtre extérieure',
        frontFacade: 'Façade avant',
        southFacade: 'Façade Sud',
        petanque: 'Terrain de pétanque',
        terrace: 'Terrasse'
      },

      activities: {
        title: 'ACTIVITÉS',
        grandvoirTitle: 'Grandvoir',
        grandvoirText: "Au centre du village, à 200m du gîte, vous profiterez d'un espace ludique et ombragé : plaine de jeux, espace BBQ/pique-nique, terrain multi-sport, terrain de pétanque en bordure de rivière, l'endroit idéal pour se relaxer !",
        farmTitle: 'La Ferme du Grand Enclos',
        farmText: "À 150m du gîte, la <a href=\"https://cooperativedugrandenclos.be/\" target=\"_blank\" rel=\"noopener noreferrer\">Coopérative du Grand Enclos</a> vous donne la possibilité de rencontrer les animaux de la ferme, de découvrir la fabrication de nombreux produits locaux et, bien sûr, de les déguster.",
        walksTitle: 'Nombreuses balades en forêt',
        walksText: "Au départ du gîte, profitez de nombreuses balades à pied, vélo… balisées (ex : <a href=\"https://www.cirkwi.com/fr/circuit/83629-sentier-des-artisans-de-l-ardenne?=undefined\" target=\"_blank\" rel=\"noopener noreferrer\">sentiers des Artisans d'Ardenne</a>). Une activité <a href=\"https://www.facebook.com/IDTrotti\" target=\"_blank\" rel=\"noopener noreferrer\">\"balade en forêt en trottinettes électriques\"</a> est également organisée au départ de Grandvoir.",
        lakeTitle: 'Le lac de Neufchâteau',
        lakeText: "À 5 km, la <a href=\"https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/presentation-de-la-base-de-loisirs\" target=\"_blank\" rel=\"noopener noreferrer\">base de loisirs</a> et le lac de Neufchâteau sont parfaits pour passer une journée en famille : balades en forêt mais aussi kayaks, <a href=\"https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/sports-et-activites-nautiques\" target=\"_blank\" rel=\"noopener noreferrer\">Aquapark</a>, plaine de jeux, paddle, mini-golf, volley… et <a href=\"https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/presentation-de-la-base-de-loisirs\" target=\"_blank\" rel=\"noopener noreferrer\">restauration</a>.",
        otherTitle: 'Autres activités',
        otherText: '<a href="https://onehour.be/" target="_blank" rel="noopener noreferrer">Escape game à Neufchâteau</a><br><br><a href="https://www.facebook.com/museedutelephonepetitvoir" target="_blank" rel="noopener noreferrer">Musée du téléphone à Petitvoir</a><br><br><a href="https://cercles-naturalistes.be/oca" target="_blank" rel="noopener noreferrer">Observatoire Centre-Ardenne à Grapfontaine</a><br><br><a href="https://www.neufchateau.be/office-du-tourisme/tourisme" target="_blank" rel="noopener noreferrer">Office du Tourisme de Neufchâteau</a>',
        furtherTitle: 'Un peu plus loin…',
        furtherText: 'Aux alentours (10 km) :<br><a href="https://www.aucoeurdelardoise.be/fr" target="_blank" rel="noopener noreferrer">Morépire à Bertrix</a>,<br><a href="https://www.museedesceltes.be/" target="_blank" rel="noopener noreferrer">Musée des Celtes à Libramont</a><br><br>À 20 km :<br><a href="https://www.capsureanlier.be/grande-foret-danlier/" target="_blank" rel="noopener noreferrer">Forêt d\'Anlier</a><br><br>À 30 km :<br><a href="https://www.bastognewarmuseum.be/" target="_blank" rel="noopener noreferrer">War Museum à Bastogne</a>,<br><a href="https://www.eurospacecenter.be/fr/" target="_blank" rel="noopener noreferrer">EuroSpace Center à Transinne</a>,<br><a href="https://www.bouilloninitiative.be/" target="_blank" rel="noopener noreferrer">Château de Bouillon</a>,<br><a href="https://www.orval.be/fr/" target="_blank" rel="noopener noreferrer">Abbaye d\'Orval</a>'
      },

      prices: {
        title: 'TARIFS 2026',
        lowSeason: '<strong>Basse-saison (hors congés scolaires) :</strong><br>Octobre à Avril : 450€/week-end &nbsp;&nbsp; 800€/Semaine',
        midSeason: '<strong>Moyenne-saison :</strong><br>Mai–Juin–Septembre : 500€/week-end &nbsp;&nbsp; 900€/Semaine',
        highSeason: '<strong>Haute-saison :</strong><br>Juillet–Août : 650€/week-end &nbsp;&nbsp; 1000€/Semaine',
        holidays: '<strong>Vacances de Noël, Nouvel An, Carnaval, Pâques et Toussaint :</strong><br>600€/week-end &nbsp;&nbsp; 1000€/Semaine &nbsp;&nbsp; 180€/Nuit de semaine',
        newYear: '<strong>Réveillons de Noël et Nouvel An :</strong> 700€/2 nuits',
        touristTax: 'Taxe de séjour : 1,50€/Personne majeure/Jour',
        deposit: 'Caution : 600€',
        sheets: 'Draps non fournis',
        footer: 'Séjour minimum : 2 nuits<br>Organisation de fête interdite'
      },

      calendar: {
        title: 'DISPONIBILITÉS',
        loadingTitle: 'Chargement...',
        loading: 'Chargement des disponibilités...',
        error: 'Impossible de charger les disponibilités. Veuillez nous contacter directement.',
        available: 'Disponible',
        booked: 'Réservé',
        past: 'Passé',
        prevMonth: 'Mois précédent',
        nextMonth: 'Mois suivant',
        months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
      },

      contact: {
        title: 'CONTACT',
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        send: 'Envoyer',
        address: 'Gîte Au Grand Cerf – La Cornée 51 – 6840 Grandvoir',
        phone: 'Tél : <a href="tel:+3261234747">+32 61 23 47 47</a><br>Gsm : <a href="tel:+32494234478">+32 494 23 44 78</a>'
      },

      location: {
        title: 'LOCALISATION',
        mapTitle: 'Carte de localisation du gîte'
      },

      footer: {
        copyright: '© 2026 par Martin Pierret. Tous droits réservés.'
      }
    },

    en: {
      meta: {
        title: 'Au Grand Cerf Holiday Home – Grandvoir',
        description: 'Rural holiday home for up to 15 people in Grandvoir, in the Belgian Ardennes. Holiday rental in a green and peaceful setting.',
        ogLocale: 'en_GB'
      },

      lang: {
        aria: 'Language selection'
      },

      nav: {
        menu: 'Navigation menu',
        home: 'Home',
        about: 'About',
        gite: 'The house',
        plus: 'Highlights',
        gallery: 'Gallery',
        activities: 'Activities',
        prices: 'Prices',
        availability: 'Availability',
        contact: 'Contact'
      },

      images: {
        logoAlt: 'Au Grand Cerf holiday home logo'
      },

      about: {
        title: 'About',
        p1: 'Welcome to this charming family holiday home, fully renovated in 2020 and able to accommodate up to 15 people in the peaceful village of Grandvoir.',
        p2: 'Ideally located near Neufchâteau, Bertrix and the Anlier Forest Nature Park, it also provides easy access to Bouillon, Bastogne, Florenville and other destinations.',
        p3: 'Surrounded by greenery, the area offers many walking and cycling routes.'
      },

      gite: {
        title: 'THE HOUSE',
        rooms: '<strong>5 bedrooms:</strong><br>1 double bed<br>1 single bed + 1 extra bed<br>1 double bed + 1 single bed<br>4 single beds, which can be joined into 2 double beds<br>1 double bed + 2 single beds',
        details: '<strong>2 shower rooms</strong> + 1 bathroom<br><strong>3 separate toilets</strong><br>1 games room<br>1 bar area'
      },

      plus: {
        title: 'HIGHLIGHTS',
        garden: 'Garden and pétanque court',
        terrace: 'Large south-facing terrace',
        wifi: 'Free Wi-Fi',
        gardenAlt: 'Garden',
        terraceAlt: 'Terrace',
        wifiAlt: 'Wi-Fi'
      },

      gallery: {
        title: 'GALLERY',
        prev: 'Previous page',
        next: 'Next page',
        defaultAlt: 'Photo of the holiday home'
      },

      galleryImages: {
        livingRoom: 'Living room',
        diningRoom: 'Dining room',
        kitchen: 'Kitchen',
        bar: 'Bar area',
        gameRoom: 'Games room',
        bathroom: 'Bathroom',
        bedroom1: 'Bedroom 1',
        bedroom2: 'Bedroom 2',
        bedroom3: 'Bedroom 3',
        bedroom4: 'Bedroom 4',
        bedroom5: 'Bedroom 5',
        window: 'Exterior window',
        frontFacade: 'Front façade',
        southFacade: 'South façade',
        petanque: 'Pétanque court',
        terrace: 'Terrace'
      },

      activities: {
        title: 'ACTIVITIES',
        grandvoirTitle: 'Grandvoir',
        grandvoirText: 'In the centre of the village, 200 m from the house, you can enjoy a shaded recreation area: playground, BBQ and picnic area, multi-sport court and pétanque court by the river. An ideal place to relax.',
        farmTitle: 'La Ferme du Grand Enclos',
        farmText: '150 m from the house, <a href="https://cooperativedugrandenclos.be/" target="_blank" rel="noopener noreferrer">Coopérative du Grand Enclos</a> gives you the opportunity to meet the farm animals, discover how many local products are made and, of course, taste them.',
        walksTitle: 'Many forest walks',
        walksText: 'Starting from the house, enjoy many marked walking and cycling routes, including the <a href="https://www.cirkwi.com/fr/circuit/83629-sentier-des-artisans-de-l-ardenne?=undefined" target="_blank" rel="noopener noreferrer">Sentier des Artisans d\'Ardenne</a>. A <a href="https://www.facebook.com/IDTrotti" target="_blank" rel="noopener noreferrer">forest ride on electric scooters</a> is also organised from Grandvoir.',
        lakeTitle: 'Neufchâteau lake',
        lakeText: '5 km away, the <a href="https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/presentation-de-la-base-de-loisirs" target="_blank" rel="noopener noreferrer">leisure base</a> and Neufchâteau lake are ideal for a family day out: forest walks, kayaks, <a href="https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/sports-et-activites-nautiques" target="_blank" rel="noopener noreferrer">Aquapark</a>, playground, paddleboarding, mini-golf, volleyball and <a href="https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/presentation-de-la-base-de-loisirs" target="_blank" rel="noopener noreferrer">food options</a>.',
        otherTitle: 'Other activities',
        otherText: '<a href="https://onehour.be/" target="_blank" rel="noopener noreferrer">Escape game in Neufchâteau</a><br><br><a href="https://www.facebook.com/museedutelephonepetitvoir" target="_blank" rel="noopener noreferrer">Telephone museum in Petitvoir</a><br><br><a href="https://cercles-naturalistes.be/oca" target="_blank" rel="noopener noreferrer">Centre-Ardenne Observatory in Grapfontaine</a><br><br><a href="https://www.neufchateau.be/office-du-tourisme/tourisme" target="_blank" rel="noopener noreferrer">Neufchâteau Tourist Office</a>',
        furtherTitle: 'A little further away…',
        furtherText: 'Nearby (10 km):<br><a href="https://www.aucoeurdelardoise.be/fr" target="_blank" rel="noopener noreferrer">Morépire in Bertrix</a>,<br><a href="https://www.museedesceltes.be/" target="_blank" rel="noopener noreferrer">Celtic Museum in Libramont</a><br><br>At 20 km:<br><a href="https://www.capsureanlier.be/grande-foret-danlier/" target="_blank" rel="noopener noreferrer">Anlier Forest</a><br><br>At 30 km:<br><a href="https://www.bastognewarmuseum.be/" target="_blank" rel="noopener noreferrer">War Museum in Bastogne</a>,<br><a href="https://www.eurospacecenter.be/fr/" target="_blank" rel="noopener noreferrer">Euro Space Center in Transinne</a>,<br><a href="https://www.bouilloninitiative.be/" target="_blank" rel="noopener noreferrer">Bouillon Castle</a>,<br><a href="https://www.orval.be/fr/" target="_blank" rel="noopener noreferrer">Orval Abbey</a>'
      },

      prices: {
        title: 'PRICES 2026',
        lowSeason: '<strong>Low season (excluding school holidays):</strong><br>October to April: €450/weekend &nbsp;&nbsp; €800/week',
        midSeason: '<strong>Mid season:</strong><br>May–June–September: €500/weekend &nbsp;&nbsp; €900/week',
        highSeason: '<strong>High season:</strong><br>July–August: €650/weekend &nbsp;&nbsp; €1000/week',
        holidays: '<strong>Christmas, New Year, Carnival, Easter and All Saints school holidays:</strong><br>€600/weekend &nbsp;&nbsp; €1000/week &nbsp;&nbsp; €180/weekday night',
        newYear: '<strong>Christmas Eve and New Year’s Eve:</strong> €700/2 nights',
        touristTax: 'Tourist tax: €1.50/adult/day',
        deposit: 'Security deposit: €600',
        sheets: 'Bed linen not provided',
        footer: 'Minimum stay: 2 nights<br>Parties are not allowed'
      },

      calendar: {
        title: 'AVAILABILITY',
        loadingTitle: 'Loading...',
        loading: 'Loading availability...',
        error: 'Unable to load availability. Please contact us directly.',
        available: 'Available',
        booked: 'Booked',
        past: 'Past',
        prevMonth: 'Previous month',
        nextMonth: 'Next month',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },

      contact: {
        title: 'CONTACT',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        address: 'Au Grand Cerf Holiday Home – La Cornée 51 – 6840 Grandvoir',
        phone: 'Phone: <a href="tel:+3261234747">+32 61 23 47 47</a><br>Mobile: <a href="tel:+32494234478">+32 494 23 44 78</a>'
      },

      location: {
        title: 'LOCATION',
        mapTitle: 'Holiday home location map'
      },

      footer: {
        copyright: '© 2026 Martin Pierret. All rights reserved.'
      }
    },

    nl: {
      meta: {
        title: 'Vakantiehuis Au Grand Cerf – Grandvoir',
        description: 'Landelijk vakantiehuis voor maximaal 15 personen in Grandvoir, in de Belgische Ardennen. Vakantieverblijf in een groene en rustige omgeving.',
        ogLocale: 'nl_BE'
      },

      lang: {
        aria: 'Taalkeuze'
      },

      nav: {
        menu: 'Navigatiemenu',
        home: 'Home',
        about: 'Over ons',
        gite: 'Ons verblijf',
        plus: 'Troeven',
        gallery: 'Galerij',
        activities: 'Activiteiten',
        prices: 'Prijzen',
        availability: 'Beschikbaarheid',
        contact: 'Contact'
      },

      images: {
        logoAlt: 'Logo van vakantiehuis Au Grand Cerf'
      },

      about: {
        title: 'Over ons',
        p1: 'Welkom in dit charmante familieverblijf, volledig gerenoveerd in 2020 en geschikt voor maximaal 15 personen in het rustige dorp Grandvoir.',
        p2: 'Ideaal gelegen nabij Neufchâteau, Bertrix en het natuurpark van het woud van Anlier. Ook Bouillon, Bastogne en Florenville zijn vlot bereikbaar.',
        p3: 'In de groene omgeving zijn er tal van wandel- en fietsroutes.'
      },

      gite: {
        title: 'ONS VERBLIJF',
        rooms: '<strong>5 slaapkamers:</strong><br>1 tweepersoonsbed<br>1 eenpersoonsbed + 1 extra bed<br>1 tweepersoonsbed + 1 eenpersoonsbed<br>4 eenpersoonsbedden, samen te voegen tot 2 tweepersoonsbedden<br>1 tweepersoonsbed + 2 eenpersoonsbedden',
        details: '<strong>2 doucheruimtes</strong> + 1 badkamer<br><strong>3 aparte toiletten</strong><br>1 speelkamer<br>1 barhoek'
      },

      plus: {
        title: 'TROEVEN',
        garden: 'Tuin en petanquebaan',
        terrace: 'Groot zuidgericht terras',
        wifi: 'Gratis wifi',
        gardenAlt: 'Tuin',
        terraceAlt: 'Terras',
        wifiAlt: 'Wifi'
      },

      gallery: {
        title: 'GALERIJ',
        prev: 'Vorige pagina',
        next: 'Volgende pagina',
        defaultAlt: 'Foto van het vakantiehuis'
      },

      galleryImages: {
        livingRoom: 'Woonkamer',
        diningRoom: 'Eetkamer',
        kitchen: 'Keuken',
        bar: 'Barhoek',
        gameRoom: 'Speelkamer',
        bathroom: 'Badkamer',
        bedroom1: 'Slaapkamer 1',
        bedroom2: 'Slaapkamer 2',
        bedroom3: 'Slaapkamer 3',
        bedroom4: 'Slaapkamer 4',
        bedroom5: 'Slaapkamer 5',
        window: 'Buitenraam',
        frontFacade: 'Voorgevel',
        southFacade: 'Zuidgevel',
        petanque: 'Petanquebaan',
        terrace: 'Terras'
      },

      activities: {
        title: 'ACTIVITEITEN',
        grandvoirTitle: 'Grandvoir',
        grandvoirText: 'In het dorpscentrum, op 200 m van het verblijf, vindt u een schaduwrijke recreatiezone: speeltuin, BBQ- en picknickruimte, multisportterrein en petanquebaan aan de rivier. Een ideale plek om te ontspannen.',
        farmTitle: 'La Ferme du Grand Enclos',
        farmText: 'Op 150 m van het verblijf biedt <a href="https://cooperativedugrandenclos.be/" target="_blank" rel="noopener noreferrer">Coopérative du Grand Enclos</a> de mogelijkheid om de boerderijdieren te ontmoeten, de productie van lokale producten te ontdekken en ze uiteraard te proeven.',
        walksTitle: 'Talrijke boswandelingen',
        walksText: 'Vanaf het verblijf kunt u genieten van talrijke bewegwijzerde wandel- en fietsroutes, zoals de <a href="https://www.cirkwi.com/fr/circuit/83629-sentier-des-artisans-de-l-ardenne?=undefined" target="_blank" rel="noopener noreferrer">Sentier des Artisans d\'Ardenne</a>. Vanuit Grandvoir wordt ook een <a href="https://www.facebook.com/IDTrotti" target="_blank" rel="noopener noreferrer">bostocht met elektrische steps</a> georganiseerd.',
        lakeTitle: 'Het meer van Neufchâteau',
        lakeText: 'Op 5 km zijn de <a href="https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/presentation-de-la-base-de-loisirs" target="_blank" rel="noopener noreferrer">recreatiebasis</a> en het meer van Neufchâteau ideaal voor een gezinsuitstap: boswandelingen, kajaks, <a href="https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/sports-et-activites-nautiques" target="_blank" rel="noopener noreferrer">Aquapark</a>, speeltuin, paddle, minigolf, volleybal en <a href="https://www.neufchateau.be/bouger-et-decouvrir/sports/base-de-loisirs/presentation-de-la-base-de-loisirs" target="_blank" rel="noopener noreferrer">eetgelegenheid</a>.',
        otherTitle: 'Andere activiteiten',
        otherText: '<a href="https://onehour.be/" target="_blank" rel="noopener noreferrer">Escape game in Neufchâteau</a><br><br><a href="https://www.facebook.com/museedutelephonepetitvoir" target="_blank" rel="noopener noreferrer">Telefoonmuseum in Petitvoir</a><br><br><a href="https://cercles-naturalistes.be/oca" target="_blank" rel="noopener noreferrer">Centre-Ardenne Observatorium in Grapfontaine</a><br><br><a href="https://www.neufchateau.be/office-du-tourisme/tourisme" target="_blank" rel="noopener noreferrer">Dienst voor Toerisme van Neufchâteau</a>',
        furtherTitle: 'Iets verder weg…',
        furtherText: 'In de omgeving (10 km):<br><a href="https://www.aucoeurdelardoise.be/fr" target="_blank" rel="noopener noreferrer">Morépire in Bertrix</a>,<br><a href="https://www.museedesceltes.be/" target="_blank" rel="noopener noreferrer">Keltenmuseum in Libramont</a><br><br>Op 20 km:<br><a href="https://www.capsureanlier.be/grande-foret-danlier/" target="_blank" rel="noopener noreferrer">Woud van Anlier</a><br><br>Op 30 km:<br><a href="https://www.bastognewarmuseum.be/" target="_blank" rel="noopener noreferrer">War Museum in Bastogne</a>,<br><a href="https://www.eurospacecenter.be/fr/" target="_blank" rel="noopener noreferrer">Euro Space Center in Transinne</a>,<br><a href="https://www.bouilloninitiative.be/" target="_blank" rel="noopener noreferrer">Kasteel van Bouillon</a>,<br><a href="https://www.orval.be/fr/" target="_blank" rel="noopener noreferrer">Abdij van Orval</a>'
      },

      prices: {
        title: 'PRIJZEN 2026',
        lowSeason: '<strong>Laagseizoen (buiten schoolvakanties):</strong><br>Oktober tot april: €450/weekend &nbsp;&nbsp; €800/week',
        midSeason: '<strong>Tussenseizoen:</strong><br>Mei–juni–september: €500/weekend &nbsp;&nbsp; €900/week',
        highSeason: '<strong>Hoogseizoen:</strong><br>Juli–augustus: €650/weekend &nbsp;&nbsp; €1000/week',
        holidays: '<strong>Kerstvakantie, nieuwjaar, krokusvakantie, paasvakantie en herfstvakantie:</strong><br>€600/weekend &nbsp;&nbsp; €1000/week &nbsp;&nbsp; €180/weeknacht',
        newYear: '<strong>Kerstavond en oudejaarsavond:</strong> €700/2 nachten',
        touristTax: 'Verblijfstaks: €1,50/volwassene/dag',
        deposit: 'Waarborg: €600',
        sheets: 'Lakens niet inbegrepen',
        footer: 'Minimumverblijf: 2 nachten<br>Feesten zijn niet toegestaan'
      },

      calendar: {
        title: 'BESCHIKBAARHEID',
        loadingTitle: 'Laden...',
        loading: 'Beschikbaarheid laden...',
        error: 'De beschikbaarheid kan niet worden geladen. Neem rechtstreeks contact met ons op.',
        available: 'Beschikbaar',
        booked: 'Gereserveerd',
        past: 'Voorbij',
        prevMonth: 'Vorige maand',
        nextMonth: 'Volgende maand',
        months: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
        weekdays: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
      },

      contact: {
        title: 'CONTACT',
        name: 'Naam',
        email: 'E-mail',
        message: 'Bericht',
        send: 'Verzenden',
        address: 'Vakantiehuis Au Grand Cerf – La Cornée 51 – 6840 Grandvoir',
        phone: 'Tel.: <a href="tel:+3261234747">+32 61 23 47 47</a><br>Gsm: <a href="tel:+32494234478">+32 494 23 44 78</a>'
      },

      location: {
        title: 'LOCATIE',
        mapTitle: 'Locatiekaart van het vakantiehuis'
      },

      footer: {
        copyright: '© 2026 Martin Pierret. Alle rechten voorbehouden.'
      }
    }
  };

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function normaliseLang(lang) {
    if (!lang || typeof lang !== 'string') return null;
    const short = lang.toLowerCase().split('-')[0];
    return SUPPORTED_LANGS.includes(short) ? short : null;
  }

  function getBrowserLanguage() {
    const browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || DEFAULT_LANG];

    for (const lang of browserLangs) {
      const supported = normaliseLang(lang);
      if (supported) return supported;
    }

    return DEFAULT_LANG;
  }

  function getInitialLanguage() {
    const urlLang = normaliseLang(new URLSearchParams(window.location.search).get('lang'));
    if (urlLang) return urlLang;

    const savedLang = normaliseLang(localStorage.getItem(STORAGE_KEY));
    if (savedLang) return savedLang;

    return getBrowserLanguage();
  }

  function t(key) {
    const lang = window.I18N?.currentLang || DEFAULT_LANG;

    return (
      getNestedValue(TRANSLATIONS[lang], key) ??
      getNestedValue(TRANSLATIONS[DEFAULT_LANG], key) ??
      key
    );
  }

  function updateMeta() {
    document.title = t('meta.title');

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', t('meta.description'));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', t('meta.description'));

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', t('meta.ogLocale'));
  }

  function updateStaticText() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      el.setAttribute('alt', t(el.dataset.i18nAlt));
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      el.setAttribute('title', t(el.dataset.i18nTitle));
    });

    document.querySelectorAll('[data-weekday-index]').forEach((el) => {
      const index = Number(el.dataset.weekdayIndex);
      const weekdays = t('calendar.weekdays');
      if (Array.isArray(weekdays) && weekdays[index]) {
        el.textContent = weekdays[index];
      }
    });
  }

  function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function applyLanguage(lang) {
    const nextLang = normaliseLang(lang) || DEFAULT_LANG;

    window.I18N.currentLang = nextLang;
    localStorage.setItem(STORAGE_KEY, nextLang);
    document.documentElement.lang = nextLang;

    updateMeta();
    updateStaticText();
    updateLanguageButtons(nextLang);

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: nextLang } }));
  }

  function closeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  function initI18n() {
    window.I18N = {
      currentLang: DEFAULT_LANG,
      supportedLangs: SUPPORTED_LANGS,
      translations: TRANSLATIONS,
      t,
      applyLanguage
    };

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
        closeMobileMenu();
      });
    });

    applyLanguage(getInitialLanguage());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
