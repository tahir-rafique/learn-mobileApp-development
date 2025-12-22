import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

//  whenever we want a loader we use "ActivityIndicator" in RN>

const Loader = () => {
    const [loading, setLoading] = useState(false);

    const handleToggle = () => {
        setLoading(prev => !prev)
    }
    return (
        <View style={styles.container}>
            {/* <ActivityIndicator size="large" color={'#4caf50'} /> */}

            <TouchableOpacity activeOpacity={0.5} style={styles.button}
                onPress={handleToggle}
            >
                <Text style={styles.buttonText}>
                    {loading ? "Hide Loading" : "Show Loading"}
                </Text>
            </TouchableOpacity>

            {
                loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color={'#4caf50'} />
                        <Text style={styles.loadingText}>
                            Loading....
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default Loader


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#4caf50',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "semibold"
    },

    loaderContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5,
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#4caf50',
        fontWeight: '600'
    }
})