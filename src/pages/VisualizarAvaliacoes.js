import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Button, TextInput } from 'react-native';
import axios from 'axios'

export default function VisualizarAvaliaces({ navigation }){
    const [review, setReview] = useState([])
    const [text, onChangeText] = useState("");

    const requestListReview = useCallback(
        () => {
            axios.get('http://192.168.100.11:8080/review/reviewList', { params: { email: text }})
            .then(function (response) {
                const data = response.data

                const listReview = []

                data.map((element) => {
                    listReview.push(element)
                })

                setReview(listReview)
            })
            .catch(function (error) {
                console.log(error);
            })
        }, 
        [text]
    )

    const exportReview = useCallback( 
        (item) => {
            axios.get('http://192.168.100.11:8080/review/export', { params: { id: item.id }})
            .then(function (response) {
                alert("Exportado com sucesso")
            })
            .catch(function (error) {
                console.log(error);
            })
        }, 
        []
    )

    const Item = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Rua: {item.address.street}</Text>
            <Text style={styles.text}>Cidade: {item.address.city}</Text>
            <Text style={styles.text}>CEP: {item.address.postalCode}</Text>
            <Button
                style={styles.botao}
                title="Exportar" 
                onPress={ () => exportReview(item) }
            />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return(
        <SafeAreaView style={styles.container}> 
            <View>
                <TextInput
                    placeholder="insira seu email"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Button
                    title="Pesquisar" 
                    onPress={ requestListReview }
                />
            </View>
            
            <FlatList
                data={review}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 8,
    },

    item: {
        backgroundColor: '#E0E0E0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    text: {
        fontWeight: "bold"
    },
    botao: {
        marginHorizontal: 20
    }

  });