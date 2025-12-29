import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const GetAPI = () => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = 'http://192.168.18.241:3000/users';

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            console.log('🔵 Fetching from:', API_URL);

            const response = await fetch(API_URL);

            console.log('✅ Response Status:', response.status);

            const json = await response.json();
            console.log('✅ Data received:', json);

            setMyData(json);
        } catch (err) {
            console.error('❌ Error:', err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);




    // useEffect(() => {

    //     axios.get('http://10.0.2.2:3000/users').then((res) => {
    //         console.log(res.data);
    //         setMyData(res.data);
    //     });

    //     console.log(myData);



    //     //  fetch() method, takes 1 parameter api-URL, this method returns a promise.
    //     //  when a promise returned we resolve that using .then() method.
    //     //  .then()  takes a call-back-fnc and inside that we recive a paramete e.g "response" .
    //     //   api ka pura data "response" main aa jata / store hojata hai.
    //     //   ya data "json" format main hota hai, esko javaScript object main convert karna hota hai.
    //     //    .json() method ka use kar ky ho jay ga.
    //     //      .json() bee ek promise return karta hai, ab ess ko bee "resolve" karna hoga
    //     //   resolve ky ley again .then() ka use karin gy.
    //     //  .then() again ek call-back-fnc ley ga aur uss call-back main ek paramete ly ga,  e.g "result"
    //     //  ess "result" main ab "API" ka data aa jay ga as javaScript object.

    //     // fetch('http://10.0.2.2:3000/users').then((response) => {
    //     //     response.json().then((result) => {
    //     //         setData(result);
    //     //         console.log("Data : ====> ", result)
    //     //     })
    //     // });



    // }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{
                marginVertical: 10,
                fontSize: 20,
                backgroundColor: 'red',
                paddingVertical: 10,
                textAlign: 'center',
                color: 'white'
            }}>
                GET API METHOD
            </Text>

            <Button title="🔄 Refresh" onPress={fetchData} color="#4CAF50" />

            {loading && <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading...</Text>}

            {error && (
                <View style={{ padding: 15, backgroundColor: '#ffebee', margin: 10 }}>
                    <Text style={{ color: 'red' }}>❌ Error: {error}</Text>
                </View>
            )}

            {myData.length > 0 && (
                <>
                    <Text style={{ textAlign: 'center', fontSize: 18, margin: 10, fontWeight: 'bold', color: 'green' }}>
                        ✅ Total Users: {myData.length}
                    </Text>

                    <FlatList
                        data={myData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={{
                                padding: 15,
                                margin: 10,
                                backgroundColor: '#E8F5E9',
                                borderRadius: 8,
                                borderWidth: 2,
                                borderColor: '#4CAF50'
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>👤 {item.name}</Text>
                                <Text style={{ marginTop: 5 }}>🆔 ID: {item.id}</Text>
                                <Text>📧 {item.email}</Text>
                            </View>
                        )}
                    />
                </>
            )}
        </View>
    )
}

export default GetAPI