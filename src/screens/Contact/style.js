import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        textAlign: 'center',
        color: 'crimson',
        fontWeight: 600,
        marginVertical: 30,
    },
    list: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    item: {
        backgroundColor: 'pink',
        marginVertical: 10,
        borderRadius: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: 'crimson'
    },
    name: {
        fontSize: 18,
        fontWeight: 500,
    },
    email: {
        fontSize: 16,
        fontWeight: 300,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
})