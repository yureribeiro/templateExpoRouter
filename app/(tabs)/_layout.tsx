import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name="one" options={{
        headerTitle: "1",
        tabBarLabel: '1'
      }} />
      <Tabs.Screen name="two" options={{
        headerTitle: "2",
        tabBarLabel: '2'
      }} />
      <Tabs.Screen name="posts" options={{
        headerTitle: "Posts",
        tabBarLabel: 'Posts',
        headerShown: false
      }} />
    </Tabs>
  )
}