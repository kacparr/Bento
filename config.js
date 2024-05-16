// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Kacper',
  imageBackground: true,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning',
  greetingAfternoon: 'Good afternoon',
  greetingEvening: 'Good evening',
  greetingNight: 'Good night',

  // Weather
  weatherKey: 'e764b2b8df458539512ea1f44f68eb52',
  weatherIcons: 'Nord', // 'OneDark', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'pl', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '51.100',
  defaultLongitude: '17.033',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: '',
      icon: '',
      link: '',
    },
    {
      id: '2',
      name: 'youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '3',
      name: '',
      icon: '',
      link: '',
    },
    {
      id: '4',
      name: 'instagram',
      icon: 'instagram',
      link: 'https://instagram.com',
    },
    {
      id: '5',
      name: '',
      icon: '',
      link: '',
    },
    {
      id: '6',
      name: 'extranet',
      icon: 'book',
      link: 'https://portal.wsb.pl',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'airplay',
  secondListIcon: 'hard-drive',

  // Links
  lists: {
    firstList: [
      {
        name: '',
        link: '',
      },
      {
        name: '',
        link: '',
      },
      {
        name: 'duo',
        link: 'https://www.duolingo.com/learn',
      },
      {
        name: 'moodle',
        link: 'https://moodle2.e-wsb.pl/my/index.php?lang=pl',
      },
      {
        name: '',
        link: '',
      },      
    ],
    secondList: [
      {
        name: 'serwer',
        link: 'http://192.168.1.10',
      },
      {
        name: 'router',
        link: 'http://192.168.1.1',
      },
      {
        name: 'github',
        link: 'https://github.com/',
      },
      {
        name: 'placeholder',
        link: 'https://www.com',
      },
      {
        name: 'placeholder',
        link: 'https://www.com',
      },      
    ],
  },
};
