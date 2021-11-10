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
  name: 'Kacper.',
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
      name: 'facebook',
      icon: 'facebook',
      link: 'https://facebook.com/',
    },
    {
      id: '2',
      name: 'youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '3',
      name: 'reddit',
      icon: 'trello',
      link: 'https://reddit.com',
    },
    {
      id: '4',
      name: 'instagram',
      icon: 'instagram',
      link: 'https://instagram.com',
    },
    {
      id: '5',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
    },
    {
      id: '6',
      name: 'mobidziennik',
      icon: 'book',
      link: 'https://mobidziennik.pl/logowanie',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'airplay',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'twitch',
        link: 'https://twitch.tv',
      },
      {
        name: 'netflix',
        link: 'https://www.netflix.com',
      },
      {
        name: 'wbijam',
        link: 'https://wbijam.pl',
      },
      {
        name: 'animeodcinki',
        link: 'https://a-o.ninja',
      },
      {
        name: 'watch2gether',
        link: 'https://w2g.tv',
      },      
    ],
    secondList: [
      {
        name: 'vinted',
        link: 'https://vinted.pl/',
      },
      {
        name: 'pinterest',
        link: 'https://pinterest.com',
      },
      {
        name: 'tetr',
        link: 'https://tetr.io',
      },
      {
        name: 'binance',
        link: 'https://binance.com/pl',
      },
      {
        name: 'pyszne',
        link: 'https://pyszne.pl',
      },      
    ],
  },
};
