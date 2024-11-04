import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { ThemedView } from './ThemedView'

const SizedImage: React.FC<{ height: number, width: number, uri: string }> = ({ height, uri, width }) => {
    return (
        <ThemedView>
            <Image source={{ uri: uri }} style={{ height, width }} resizeMode='contain' />
        </ThemedView>
    )
}

export default memo(SizedImage)

const styles = StyleSheet.create({})