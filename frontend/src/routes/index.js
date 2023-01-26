// import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Home from "../pages/home/Home";

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "doctorlogin",
    // children: [
    //   {
    //     index: true,
    //     element: <Products />,
    //   },
    //   {
    //     path: ":productId",
    //     element: <Product />,
    //   },
    // ],
  },
  {
    path: "doctor",
  },
  {
    path: "patient/:patientId",
  }
];

export default mainRoutes;
