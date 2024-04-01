import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const Layout = () => {
  return <Tabs screenOptions={{
    tabBarActiveTintColor: Colors.primary,
  }}>
    <Tabs.Screen name='index' options={{
      title: 'Home',
      headerTitleAlign: 'center',
      tabBarIcon : ({color, size}) => <Feather name="home" size={size} color={color} />
    }}>
    </Tabs.Screen>

    <Tabs.Screen name='goods' options={{
      title: 'Goods',
      headerTitleAlign: 'center',
      tabBarIcon : ({color, size}) => <Feather name="package" size={size} color={color} />,
      headerTintColor: Colors.black,
      headerTitleStyle: {fontFamily: 'SpaceMono'}
    }}>
    </Tabs.Screen>

    <Tabs.Screen name='documents' options={{
      title: 'Documents',
      headerTitleAlign: 'center',
      tabBarIcon : ({color, size}) => <Feather name="file" size={size} color={color} />,
      headerTintColor: Colors.black,
      headerTitleStyle: {fontFamily: 'SpaceMono'}
    }}>
    </Tabs.Screen>

    <Tabs.Screen name='settings' options={{
      title: 'Settings',
      headerTitleAlign: 'center',
      tabBarIcon : ({color, size}) => <Feather name="settings" size={size} color={color} />,
      headerTintColor: Colors.black,
      headerTitleStyle: {fontFamily: 'SpaceMono', fontWeight: 'bold'}
    }}>
    </Tabs.Screen>

  </Tabs>;
  
}

export default Layout