import React, { useState } from "react";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
