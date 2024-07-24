
class Data {
  constructor() {
    this.jsonFilePath = "./database.json";
    this.data = null;
  }

  async fetchData() {
    try {
      const response = await fetch(this.jsonFilePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  getSports() {
    return this.data ? this.data.sports : [];
  }

  getSpots() {
    return this.data ? this.data.spots : [];
  }

  getMainPage() {
    return this.data ? this.data.mainPage : null;
  }

  getSponsors() {
    return this.data ? this.data.sponsors : [];
  }

  getCountries() {
    return this.data ? this.data.countries : [];
  }

  getVenues() {
    return this.data ? this.data.venues : [];
  }

  getEvents() {
    return this.data ? this.data.events : [];
  }

  getSportById(id) {
    return this.data ? this.data.sports.find(sport => sport.id === id) : null;
  }

  getSpotById(id) {
    return this.data ? this.data.spots.find(spot => spot.id === id) : null;
  }

  getVenueById(id) {
    return this.data ? this.data.venues.find(venue => venue.id === id) : null;
  }

  getEventById(id) {
    return this.data ? this.data.events.find(event => event.id === id) : null;
  }

  getSportEvents() {
    return [
      { 
        icon: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/athletism.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791", 
        title: "Athlétisme", 
        times: "9h30 - 12h : Course de 100m\n 15H - 17h : Saut de haies"
      },
      { 
        icon: "https://firebasestorage.googleapis.com/v0/b/iw2-s2.appspot.com/o/badMinton.svg?alt=media&token=8562ff5e-1eb1-4e56-99e4-ca74bfc6d791", 
        title: "Badminton", 
        times: "9h30 - 12h : Course de 100m\n 15H - 17h : Saut de haies"
      }
    ];
  }
}

export default Data;
