import { FlatList, LayoutChangeEvent, Text, } from 'react-native'
import React, { useState } from 'react'
import { useInfiniteFetch } from '@/hooks/useInfiniteFetch'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import SizedImage from '@/components/SizedImage'
import { infiniteImages } from '@/feature/tabs/index'

const Home = () => {
  const [offset, setOffset] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const { data, isPending, isFetching, fetchNextPage } = useInfiniteFetch({
    queryKey: ["infiniteImages"],
    queryFn: infiniteImages,
    initialPageParam: offset,
    getNextPageParam: () => {
      console.log({ offset })
      return offset + 1
    }
  })
  const setHeightWidth = (e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height)
    setWidth(e.nativeEvent.layout.width)
  }
  const pageNextImages = () => {
    if (!isFetching) {
      setOffset(offset + 1)
      fetchNextPage()
    }
  }

  const renderItem = ({ item }: { item: { download_url: string } }) => {
    return (
      <SizedImage uri={item.download_url} height={height} width={width} />
    )
  }
  if (isPending) {
    return <ThemedView>
      <ThemedText>{"Loading..."}</ThemedText>
    </ThemedView>
  }
  return (
    <ThemedView style={{ flex: 1 }} onLayout={setHeightWidth}>
      <FlatList
        data={data?.pages.flat() || []} // Flattening the 2D array
        extraData={data?.pages.flat()}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        pagingEnabled={true}
        onEndReached={pageNextImages}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>Loading...</Text>}
      />
    </ThemedView>
  )
}

export default Home

