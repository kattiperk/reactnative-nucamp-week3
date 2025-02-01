import React from 'react';
////////// NOTE: The Text component used in this course comes from the 'react-native' library, not 'react-native-elements'. Yes, there is a Text component in the
// RNE library, and yes, it works just fine (so no points off). However, the RNE Text component actually is built off the RN component and so any code you might copy/paste from the NuCamp cirrciulumn matches
// I suggest you use the RN version.
// OLD CODE:
/*
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
*/
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
////////// END NOTE

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{margin: 20}}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Card.Image source={require('../assets/images/logo.png')}></Card.Image>
                <Card.Divider />
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>
            </Card>
        </ScrollView>
    );
}

export default ContactScreen;