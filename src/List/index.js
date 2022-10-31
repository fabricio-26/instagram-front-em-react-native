import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Feed(props){
    return(
        <View style={styles.feed}>
           <Text>{props.data.nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    feed:{
        
    },
    
})