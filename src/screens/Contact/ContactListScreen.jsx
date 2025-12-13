import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { users } from './userContactInfo'
import ContactItem from '../../components/ContactItem'
import { styles } from './style'


const ContactListScreen = () => {

    const myItemzz = ({ item }) => <ContactItem name={item.name} email={item.email} />
    return (
        <FlatList
            data={users}
            renderItem={myItemzz}
            keyExtractor={item => item.id}
            ListHeaderComponent={<Text style={styles.heading}>My Heading</Text>}
            contentContainerStyle={styles.list}
        />
    )
}

export default ContactListScreen