import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";

import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";

// const router = createBrowserRouter([
//   { path: "/", element: <HomeScreen /> },
//   { path: "/newRecipe", element: <NewRecipeScreen /> },
//   { path: "/recipe/:id", element: <DetailScreen /> },
// ]);

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomeScreen />} />
//     <Route path="/newRecipe" element={<NewRecipeScreen />} />
//     <Route path="/recipe/:id" element={<DetailScreen />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <>
      <div className="App">
        {/* <RouterProvider router={router}> */}
        <Header />
        {/*This is where you will code for some of Part 1. */}
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/newRecipe" element={<NewRecipeScreen />} />
          <Route path="/recipe/:id" element={<DetailScreen />} />
        </Routes>
        {/* </RouterProvider> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
