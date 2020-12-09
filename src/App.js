import { useState, useEffect } from "react";
import Loader from "./comps/Loader";

import Map from "./comps/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchEventsHandler = async () => {
      setloading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );

      const { events } = await res.json();

      setEventData(events);
      setloading(false);
    };

    fetchEventsHandler();
  }, []);

  return (
    <div className="App">
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
