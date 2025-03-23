import React from 'react'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'

const ViewContainer = ({ children }: SafeAreaViewProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  )
}

export default ViewContainer