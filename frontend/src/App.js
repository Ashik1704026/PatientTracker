import { Link, useRoutes } from "react-router-dom";

import routes from "./routes";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>

    <Routes />
    </>
  );
}

export default App;
