import "./styles.css";
import { getweather } from "./getWeather";

const location = document.querySelector(".location");

const weatherInfo = getweather("london");
