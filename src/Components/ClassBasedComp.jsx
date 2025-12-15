// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class ClassBasedComponent extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={{ fontSize: 30, textAlign: 'center' }}>Class Component</Text>
//             </View>
//         )
//     }
// }

// export default ClassBasedComponent;

// rnce:    ✅
//  remove the export keyword from behind the class keyword.
import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'


export class SecondComp extends Component {

    render() {
        return (
            <View>
                <Text style={{ fontSize: 34, textAlign: 'center', fontWeight: 600, color: 'red', marginVertical: 30 }}> 2nd Comp</Text>

                <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 600 }}>Age:{this.props.data}</Text>

            </View>
        )
    }

}

class ClassBasedComp extends Component {


    // constructor special method of class  which call before the your class component mount/render.
    constructor() {
        super();  // by using this method parent class constructor called automatically.    
        this.state = {
            myName: 'Tahir',
        }
    }

    updateName = () => {
        this.setState({ myName: 'Ali' })  // this not variable like in function, these are call attribute or properties.
    }

    render() {

        const age = 20;

        return (
            <View>
                <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 600 }}>ClassBasedComp</Text>
                <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 600 }}>Name:{this.state.myName}</Text>

                <Button
                    title='Press me'
                    onPress={this.updateName}
                />

                <SecondComp
                    data={age}
                />
            </View>
        )
    }
}

export default ClassBasedComp
