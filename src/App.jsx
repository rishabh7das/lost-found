import Feed from "./components/Feed.jsx";
import Homepage from "./components/Homepage.jsx";
// import LostForm from "./components/LostForm.jsx"
import LostFoundForm from "./components/LostFoundForm";
import Navbar from "./components/Navbar";
import SigninOut from "./components/SigninOut"
// import Signup from "./components/Signup"
// import FoundForm from "./components/FoundForm"
// import Login from "./components/Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Homepage />
        </>
      ),
    },
    {path:"/login",
      element: <>
      <Navbar />
      <SigninOut />
    </>
    },
    { 
      path:"/lost",
      element: <>
      <Navbar />
      <LostFoundForm />
    </>
    },
    { 
      path:"/found",
      element: <>
      <Navbar />
      <LostFoundForm />
    </>
    },
    {
      path:"/feed",
      element:<>
      <Navbar />
      <Feed/>
      </>
    }
  ]);

  return (
    <>
      {/* <Navbar />
      <LostFoundForm /> */}
      {/* <FoundForm/> */}
      {/* <LostForm/> */}
      {/* <Homepage/> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <SigninOut /> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
