import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from "./src/screens/ComponentScreen";
import FlatListComponent from "./src/screens/FlatListComponent";
import Welcome from "./src/screens/Components/Welcome";
import Login from "./src/screens/Components/Login";
import Registro from "./src/screens/Components/Registro/Registro";
import RecordarPass from "./src/screens/Components/RecordarPass";
import Domicilio from "./src/screens/Components/Domicilio/Domicilio";
import DomicilioDetail from "./src/screens/Components/DomicilioDetail/DomicilioDetail";
import Reclamar from "./src/screens/Components/Reclamar/Reclamar";
import ReclamoDetail from "./src/screens/Components/ReclamarDetail/ReclamarDetail";
import ActiveModule from "./src/screens/Components/Contexts/ActiveModule";
import React, {Component, useState} from 'react';

const navigator = createStackNavigator(
  {
    Components:ComponentsScreen,
    FlatListComponent:FlatListComponent,
    Welcome,
    Login,
    Registro,
    RecordarPass,
    Domicilio,
    DomicilioDetail,
    Reclamar,
    ReclamoDetail
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

const App = createAppContainer(navigator);

export default ()=>{
  const [value, setValue] = useState("DOMICILIO");
  return(
    <ActiveModule.Provider value={ {
      setValue : (e)=>{ setValue(e) },
      value
    } }
     >
      <App />
    </ActiveModule.Provider>
  )
};
