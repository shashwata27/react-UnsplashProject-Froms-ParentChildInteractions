import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vcnw2Qm_gAbp5DoClO1aPQQd6oHGPpQibPx3YtktBKI",
  },
});
