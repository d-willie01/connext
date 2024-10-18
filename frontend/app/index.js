import { Link } from "expo-router";
import Tabs from "./navigation/tabs";
import StateProvider from "../state/stateManagement";

export default function Index() {
  return (
    <StateProvider>
        <Tabs/>
    </StateProvider>
   
  );
}
