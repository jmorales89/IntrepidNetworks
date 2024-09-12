import { useEffect } from 'react';
import './App.css';
import { fetchAllMarkers } from './routes/markers';



function App() {

  useEffect(() => {

    const fetchMarkers = async () => {
      try {
        const response = await fetchAllMarkers()
       console.log(response)
      } catch (e) {
        console.error(e);
      }
    };
    fetchMarkers();
  }, []);


  return (
   <div>
hi
   </div>
  );
}

export default App;
