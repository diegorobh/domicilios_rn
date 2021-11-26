import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import FlatListComponent from "./src/screens/FlatListComponent";
import ImageScreen from "./src/screens/ImageScreen";
import CounterComponent from "./src/screens/Components/CounterComponent";
import ColorComponent from "./src/screens/Components/ColorComponent";
import Welcome from "./src/screens/Components/Welcome";
import Login from "./src/screens/Components/Login";
import Registro from "./src/screens/Components/Registro";
import RecordarPass from "./src/screens/Components/RecordarPass";
import Domicilio from "./src/screens/Components/Domicilio";
import DomicilioDetail from "./src/screens/Components/DomicilioDetail";
import Reclamar from "./src/screens/Components/Reclamar";
import ReclamoDetail from "./src/screens/Components/ReclamarDetail";
import ActiveModule from "./src/screens/Components/Contexts/ActiveModule";
import React, {Component, useState} from 'react';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,//names of the components
    Components:ComponentsScreen,
    FlatListComponent:FlatListComponent,
    ImageScreen,
    CounterComponent,
    ColorComponent,
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
    initialRouteName: "RecordarPass",
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
