import axios from "axios";
import { Config } from "../config";

export const httpClient = axios.create({
  baseURL: Config.baseURL,
});
