
import { message } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchForecastData, fetchWeatherData } from "../src/apipath/api";
import { ForecastDataSlice, WeatherDataSlice } from "../src/WeatherSlice";
export const useWeatherContent = () => {
  const dispatch = useDispatch();

  const WeatherHandler = useCallback(
    async (val: any) => {
      try {
        const data = await fetchWeatherData(val);
        if (data) {
          dispatch(WeatherDataSlice(data));
        } else {
          message.destroy();
          message.error("Failed to fetch weather data");
        }
      } catch (error: any) {
        console.error("Error fetching weather data:", error);
        message.destroy();
        message.error(error.message || "Failed to fetch weather data");
      }
    },
    [dispatch]
  );

  const ForecastHandler = useCallback(
    async (val: any) => {
      try {
        const data = await fetchForecastData(val);
        if (data) {
          dispatch(ForecastDataSlice(data));
        } else {
          message.destroy();
          message.error("Failed to fetch weather data");
        }
      } catch (error: any) {
        console.error("Error fetching weather data:", error);
        message.destroy();
        message.error(error.message || "Failed to fetch weather data");
      }
    },
    [dispatch]
  );

  return {
    WeatherHandler,
    ForecastHandler,
  };
};
