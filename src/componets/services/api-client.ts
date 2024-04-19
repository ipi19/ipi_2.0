import axios from "axios";

export default axios.create({
  params: {
    baseURL: "https://seeking-alpha.p.rapidapi.com",
    key: "1e8654b9afmshddc2b6f71aab61bp151140jsnf42d974281cf",
  },
});
