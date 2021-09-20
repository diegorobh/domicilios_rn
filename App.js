import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import FlatListComponent from "./src/screens/FlatListComponent";
import ImageScreen from "./src/screens/ImageScreen";
import CounterComponent from "./src/screens/Components/CounterComponent";
import ColorComponent from "./src/screens/Components/ColorComponent";
import Welcome from "./src/screens/Components/Welcome";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,//names of the components
    Components:ComponentsScreen,
    FlatListComponent:FlatListComponent,
    ImageScreen,
    CounterComponent,
    ColorComponent,
    Welcome
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
