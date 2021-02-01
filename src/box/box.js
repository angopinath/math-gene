import React from 'react'
import {View, Text, Button} from 'react-native'
import { Container, Text as Txt, Button as Btn } from 'native-base'


class Box extends React.Component {
    render() {
        return (
            <View>
                <Text>This is Box module</Text>
                <Button><Text>Button</Text></Button>
                <Container>
                    <Btn><Txt>Button txt</Txt></Btn>
                    <Txt>Gpop</Txt>
                </Container>
            </View>
        )
    }
}

export default Box