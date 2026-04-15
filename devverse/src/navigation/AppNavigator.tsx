import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CriarServico from "../screens/dev/CriarServico";
import EditarServico from "../screens/dev/EditarServico";

// telas
import Login from "../screens/auth/Login";
import HomeCliente from "../screens/cliente/HomeCliente";
import DashboardDev from "../screens/dev/DashboardDev";
import AdminUsuarios from "../screens/admin/AdminUsuarios";

const Stack = createNativeStackNavigator<any>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeCliente" component={HomeCliente} />
        <Stack.Screen name="DashboardDev" component={DashboardDev} />
        <Stack.Screen name="AdminUsuarios" component={AdminUsuarios} />
        <Stack.Screen name="CriarServico" component={CriarServico} />
        <Stack.Screen name="EditarServico" component={EditarServico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}