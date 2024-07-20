
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
}

export default Data;