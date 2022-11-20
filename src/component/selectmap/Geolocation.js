import React, { useEffect, useState }from 'react'

const useGeoLocation=()=> {
    const [location, setlocation] = useState({
        load: false,
        coordinates: { lat: "", lng: "" },
      });
    
      const onSucces = (location) => {
        setlocation({
          load: true,
          coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
        });
      };
    
      const onError = (error) => {
        setlocation({ load: true, error });
      };

      const options = {
        enableHighAccuracy: true,
       
        maximumAge: 0
      };
    
      useEffect(() => {
        if (!("geolocation" in navigator)) {
          onError({
            code: 0,
            message: "Geolocation not support",
          });
          setlocation(
            (state => ({
              ...state,
              load: true,
              error: {
                code: 0,
                message: "Geolocation not support",
              },
            }))
          );
        }
    
        navigator.geolocation.getCurrentPosition(onSucces, onError,options);
      }, []);
    
    return location;

}

export default useGeoLocation