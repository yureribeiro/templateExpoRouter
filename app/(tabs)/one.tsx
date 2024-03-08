import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Page() {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Pagina TAB 1</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}