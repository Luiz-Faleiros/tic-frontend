import axios from "axios";
import { TIC_API } from "../constants";


const apiTic = axios.create({
    baseURL: TIC_API
})

export { apiTic }
