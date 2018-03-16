// Sample data to be used before we connect to the API
export default {
  city: "Mississauga",

  current: {
    date: new Date().toISOString(),
    temp: 5,
    weather: "Sunny"
  },

  image_url:
    "https://images.unsplash.com/photo-1512399594555-29c2ec569c53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac1b865093886012d54618b84e9b4f29&auto=format&fit=crop&w=2848&q=80",

  forecast: [
    {
      date: "2017-01-18",
      high: -5,
      low: -15,
      weather: "Sunny"
    },
    {
      date: "2017-01-19",
      high: -5,
      low: -15,
      weather: "Cloudy"
    },
    {
      date: "2017-01-20",
      high: -5,
      low: -15,
      weather: "Sunny"
    },
    {
      date: "2017-01-21",
      high: -5,
      low: -15,
      weather: "Snowy"
    },
    {
      date: "2017-01-22",
      high: -5,
      low: -15,
      weather: "Snowy"
    },
    {
      date: "2017-01-23",
      high: -5,
      low: -15,
      weather: "Foggy"
    },
    {
      date: "2017-01-24",
      high: -5,
      low: -15,
      weather: "Sunny"
    }
  ]
};
