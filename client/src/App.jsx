import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import { supabase } from './client'
import './App.css'

function App() {
  // 1. Create a state variable to hold the list of creators
  const [creators, setCreators] = useState([]);

  // 2. Use 'useEffect' to run this code when the app starts
  useEffect(() => {
    // Define the async function to fetch data
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select();
      
      // Update the state with the data we found
      setCreators(data);
    }
    
    // Call the function
    fetchCreators();
  }, []); // The empty [] means "run only once on startup"

  // 3. Update the routes to pass the 'creators' data to the ShowCreators page
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators creators={creators} />
    },
    {
      path: "/edit/:id",
      element: <EditCreator />
    },
    {
      path: "/new",
      element: <AddCreator />
    },
    {
      path: "/:id",
      element: <ViewCreator />
    }
  ]);

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;