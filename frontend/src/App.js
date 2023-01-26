import { Link, useRoutes } from "react-router-dom";

import routes from "./routes";
import Routes from "./Routes";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>

<Routes />
    </>
  );
}

export default App;
