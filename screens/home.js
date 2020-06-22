import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react'
import Card from '../shared/card'


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Unreal Tournament', rating: 5, body: 'Lorem ipsum', key: 1 },
        { title: 'Counter Strike', rating: 3, body: 'Lorem ipsum', key: 2 },
        { title: 'Quake', rating: 4, body: 'Lorem ipsum', key: 3 }
    ])
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
    //     // navigation.push('ReviewDetails')
    // }
    return (
        <View style={styles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            {/* <Text>Home Screen</Text> */}
            {/* <Button title="GO TO REVIEW DETS" onPress={pressHandler}></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }

});

