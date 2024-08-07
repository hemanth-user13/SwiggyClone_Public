import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);

  async function getCityName(lat, lng) {
    const apiKey = "695f68fe5de948b4a22a674d8a8d4eab";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setCity(data.results[0].components.city || data.results[0].components.town || data.results[0].components.village || "unKnown Location");
      } else {
        setCity("Unknown location");
      }
    } catch (error) {
      setError("Failed to fetch city name");
    }
  }

  function getPosition() {
    if (!navigator.geolocation) {
      return setError("Your browser does not support geolocation");
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setPosition({ lat, lng });
        getCityName(lat, lng);
        setIsLoading(false);
        // Update the URL with latitude and longitude
        const newUrl = `${window.location.origin}${window.location.pathname}?lat=${lat}&lng=${lng}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition, city };
}
