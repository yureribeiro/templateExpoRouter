import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de carregamento/registro/etc</Text>
      <Link href="/login" asChild>
        <Button title="Abrir Login Modal" />
      </Link>
    </View>
  )
}