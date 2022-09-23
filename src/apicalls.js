import latitude from './latitude.js'
import longitude from './longitude.js'

const apiCalls = { 
    getData: (location) => {
      return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude[location].lat}&lon=${longitude[location].long}&appid=d58003e6ade0f906bde1fcfb2fe9449b&units=standard`)  
      .then(rsp => {
        if (!rsp.ok) {
          throw new Error('Unable to access the server.  Please try again!')
        } else {
            return rsp.json()
            }           
        })
    }
  }

  export default apiCalls