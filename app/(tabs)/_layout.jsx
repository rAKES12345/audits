import { StyleSheet, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState } from "react";
import { Tabs, Redirect } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageZIndex, setImageZIndex] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageZIndex(-1);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require('../../assets/images/main-logo.jpg')}
          style={[styles.mainLogo, { zIndex: imageZIndex }]}
          resizeMode="cover"
        />
      </SafeAreaView>
    );
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="Audits"
        options={{
          tabBarLabel: 'Audits',
          tabBarIcon: ({ color }) => (
            <Foundation name="clipboard-notes" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="Schedules"
        options={{
          tabBarLabel: 'Schedules',
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="Actions"
        options={{
          tabBarLabel: 'Actions',
          tabBarIcon: ({ color }) => (
            <Feather name="check-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="More"
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color }) => (
            <Feather name="more-horizontal" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
});

export default Layout;
