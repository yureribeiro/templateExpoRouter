import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Posts() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link style={{ fontSize: 20 }} href="/posts/1">POST 1</Link>
      <Link style={{ fontSize: 20 }} href="/posts/2">POST 2</Link>
      <Link style={{ fontSize: 20 }} href="/posts/3">POST 3</Link>
    </View>
  )
}