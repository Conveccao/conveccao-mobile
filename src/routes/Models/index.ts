import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Welcome: undefined
    Main: undefined
}

export type BottomTabParamList = {
    Estações: undefined;
    Favoritos: undefined;
  };

  export type RootStackParamList = {
    MainNav: NavigatorScreenParams<BottomTabParamList>;
    Feed: undefined;
  };  
export type propsStack = NativeStackNavigationProp<propsNavigationStack>