import axios from "axios";

const apifilmes = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization:"Bearer "
    }
})

export default apifilmes