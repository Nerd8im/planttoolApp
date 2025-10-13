import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import PublicacaoDepoimento from '../paginas/publicacaoDepoimento/publicacaoDepoimento.js';
import estiloDrawer from './estiloDrawer.js';
import HomeScreen from '../paginas/home/home.js';
import MeuPerfil from '../paginas/perfil/perfil.js';
import React, { useEffect, useState } from 'react';

const Drawer = createDrawerNavigator();

function ConteudoDrawer(dados) {
  return (
    <DrawerContentScrollView {...dados}>
      <View style={estiloDrawer.containerLogo}>
        <Image source={require('../../assets/logo.png')} style={estiloDrawer.logo} />
      </View>
      <DrawerItemList {...dados} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(dados) => <ConteudoDrawer {...dados} />}
      screenOptions={{
        drawerActiveTintColor: 'purple',
        drawerItemStyle: { marginVertical: 5, borderBottomWidth: 1, borderBottomColor: '#eee' },
        drawerLabelStyle: { textAlign: 'center' },
      }}>
      <Drawer.Screen options={{ headerShown: false }} name="Depoimentos recentes" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={MeuPerfil} />
      <Drawer.Screen name="Publicar Depoimento" component={PublicacaoDepoimento} />
    </Drawer.Navigator>
  );
}