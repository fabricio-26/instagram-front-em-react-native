import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Storys(props) {
    return (
        <View style={styles.storys}>
            <View style={styles.viewStorys}>
                <TouchableOpacity style={{ textAlign:'center', alignItems:'center'}}>
                    <Image
                        source={{ uri: props.data.imgperfil }}
                        style={styles.fotoPerfil}
                    />
                </TouchableOpacity>
                    <Text style={[styles.nomeUsuario, { justifyContent: 'center'}]}>{props.data.nome}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    storys: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flex: 1,
        paddingBottom: 20,
        marginBottom: 25,
        marginTop: 30,


    },
    viewStorys: {
        width: 60,
        height: 60,
        backgroundColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 50,
        marginTop: -30,
    },
    fotoPerfil: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    nomeUsuario: {
        fontSize: 15,
    },

})