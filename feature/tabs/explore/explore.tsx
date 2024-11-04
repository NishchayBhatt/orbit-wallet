import { FlatList, LayoutChangeEvent, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { useFetch } from '@/hooks/useFetch'
import { getRandomInteger } from '@/utils/Math'
import { getListImages } from './exploreApi'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import SizedImage from '@/components/SizedImage'

export const DiscoverImage = () => {
    const { data, isPending } = useFetch({
        queryKey: ["discover"],
        queryFn: () => getListImages(getRandomInteger(0, 10), 10)
    })
    const [width, setWidth] = useState<number>(0)
    const setHeightWidth = (e: LayoutChangeEvent) => {
        setWidth(e.nativeEvent.layout.width)
    }
    if (isPending) {
        return <ThemedText>{'Loading'}</ThemedText>
    }
    return (
        <ThemedView style={styles.container} onLayout={setHeightWidth}>
            <SizedImage uri={data[(data?.length ?? 1) - 1]?.download_url} height={300} width={width} />
            <ThemedText type='title' style={styles.discoverTitle}>{"#Trending"}</ThemedText>
        </ThemedView>
    )
}





export const ImageDetailsComponent: React.FC<{ item: { author: string, download_url: string } }> = ({ item }) => {
    return <ThemedView style={{ marginHorizontal: 20 }}>
        <SizedImage uri={item?.download_url} height={150} width={150} />
        <ThemedText style={styles.authorText}>{item.author}</ThemedText>
    </ThemedView>
}







export const ListImages: React.FC<{ title: string }> = ({ title }) => {
    const { data, isPending } = useFetch({
        queryKey: ["discover" + "-" + title],
        queryFn: () => getListImages(getRandomInteger(0, 10), 50)
    })
    if (isPending) {
        return <ThemedText>{'Loading'}</ThemedText>
    }
    return (
        <ThemedView style={styles.container} >
            <ThemedText type='title' >{title}</ThemedText>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => {
                    return <ImageDetailsComponent item={item} />
                }}
            />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10
    },
    discoverTitle: {
        position: "absolute",
        bottom: 30
    },
    authorText: {
        position: "absolute",
        bottom: 0,
    }
})