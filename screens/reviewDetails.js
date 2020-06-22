import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import Card from '../shared/card'
import images from '../styles/global'

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam("rating")
    // const pressHandler = () => {
    //     // navigation.goBack();
    //     navigation.pop();
    // }
    return (
        <View style={styles.container}>
            {/* <Text>ReviewDetails Screen</Text> */}
            {/* <Button title="BACK TO HOME SCREEN" onPress={pressHandler} /> */}
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                {/* <Text>{navigation.getParam('rating')}</Text> */}
                <View style={styles.rating}>
                    <Text>Game Zone rating</Text>
                    <Image source={images.ratings[rating]}></Image>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     padding: 24
    // }
})

