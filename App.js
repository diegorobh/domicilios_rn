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
import Domicilio from "./src/screens/Components/Domicilio";
import DomicilioDetail from "./src/screens/Components/DomicilioDetail";
import Reclamar from "./src/screens/Components/Reclamar";
import ReclamoDetail from "./src/screens/Components/ReclamarDetail";

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
    Domicilio,
    DomicilioDetail,
    Reclamar,
    ReclamoDetail
  },
  {
    initialRouteName: "Reclamar",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
