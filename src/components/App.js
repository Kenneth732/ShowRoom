import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PlacesPage from "./PlacesPage";
import PlacesList from "./PlacesList";
import Kenya from "./Kenya";


function App() {
  return (
    <Router>
      <>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <PlacesPage />
          </Route>
          <Route exact path="/new">
            <PlacesList />
          </Route>
          <Route exact path="/kenya">
            <Kenya />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
