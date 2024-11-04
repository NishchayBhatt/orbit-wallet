import { ScrollView, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedTextInput } from '@/components/ThemedTextInput'
import { DiscoverImage, ListImages } from '@/feature/tabs/explore/explore'
const explore = () => {
  const [search, setSearch] = useState<string>("")
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ThemedText type='title' >{"Discover the world"}</ThemedText>
        <ThemedTextInput value={search} onChangeText={setSearch} placeholder='Search' style={{ marginTop: 20, borderRadius: 5 }} />
        <DiscoverImage />
        <ListImages title='Trending Hastags' />
        <ListImages title='Top Community' />
      </ScrollView>
    </ThemedView>
  )
}

export default explore

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  }
})