import React from "react";
import Main from "./components/main";
import './App.css';
import Details  from './components/details';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const [mode,setMode] = React.useState("Dark");
  const [style,setStyle] =React.useState({
      backgroundColor:"white",
      color:"black"
  })

  function toggleStyle(){
      console.log("Toggle Clicked",mode)
      if(mode==="Dark"){
          setStyle({
              backgroundColor:"hsl(207, 26%, 17%)",
              color:"white"  
          })
          setMode("Light");
      }else{

          setStyle({
              backgroundColor:"white",
              color:"black"  
          })
          setMode("Dark")
      }
  }




  const router = createBrowserRouter([

    {
      path: "/Countries",
      element: <Main
      mode={mode}
        style={style}
        toggleStyle={toggleStyle} />,
    },{
      path:"/Countries/:id",
      element: <Details
        mode={mode}
        style={style}
        toggleStyle={toggleStyle} />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
