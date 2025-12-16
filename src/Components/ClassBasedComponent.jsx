// rnce:    ✅
//  remove the export keyword from behind the class keyword.
import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

export class SecondClassComp extends Component {

    render() { 
        return (
            <View>
                <Text style={{ fontSize: 34, textAlign: 'center', fontWeight: 600, color: 'red', marginVertical: 30 }}> 2nd Comp</Text>
                {/* prop */}
                <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 600 }}>
                    Age:{this.props.data}
                </Text>
            </View> 
        )
    }

}

class ClassBasedComponent extends Component {

    //  extends keyword here tells that we want to inherit features and function of any other class inside this class. 
    // so here classBasedComponent is our child class which is inherited, and Component is our parent class , so here we actually want to use some features from "Component" class inside our parent class "ClassBasedComponent". that why here we inherit the first class "ClassBasedComponent" using keyword "extends"

    //  state in class ✅
    // constructor special method of class  which call before the your class component mount/render.
    constructor() {
        super();  // by using this method parent class constructor called automatically.    
        this.state = {
            myName: 'Tahir',
        }
        //  this. method is used to target the current class, and in class based comp we have built-in state and props 
    }
    // update state in class ✅

    updateName = () => {  // this in not a "function", like as in functional component, this is a "method".
        this.setState({ myName: 'Ali' })  // this not "variable" like in function, these are call attribute or properties.
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

                <SecondClassComp
                    //  data is here prop sended to this other class.
                    data={age}
                />
            </View>
        )
    }
}

export default ClassBasedComponent
