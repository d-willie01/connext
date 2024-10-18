import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import { StateContext } from '../../state/stateManagement'

export default function Tabs() {

  const {UState} = useContext(StateContext);

  console.log(UState);
  return (
    <View>
      <Text>
      Eat Lead
      </Text>
    </View>
  )
}
