import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import React from 'react';
import { Platform } from 'react-native';


import { Colors } from '@/constants/Colors';

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Restaurants',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="restaurant" color={color} />,
        }}
      />

      <Tabs.Screen
        name="maps"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="map" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="settings-sharp" color={color} />,
        }}
      />
    </Tabs>
  );
}
