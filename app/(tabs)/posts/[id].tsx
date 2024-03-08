import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function Page() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{
        headerTitle: `Detalhes do post: ${id}`
      }} />
      <Text style={{ fontSize: 30 }}>Post {id}</Text>
    </View>
  )
}