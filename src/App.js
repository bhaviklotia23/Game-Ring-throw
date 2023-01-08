import logo from "./logo.svg";
import "./App.css";
import StepOne from "./Component/StepOne";
import StepTwo from "./Component/StepTwo";
import StepThree from "./Component/StepThree";
import Start from "./Component/Start";
import Game from "./Component/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/1",
      element: <StepOne />,
    },

    {
      path: "/2",
      element: <StepTwo />,
    },

    {
      path: "/3",
      element: <StepThree />,
    },

    {
      path: "/",
      element: <Start />,
    },

    {
      path: "/4",
      element: <Game />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
      {/* <Start /> */}
      {/* <Game /> */}
    </>
  );
}

export default App;
