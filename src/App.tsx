import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { addTrack, setupPlayer } from '../musicPlayerServices';


function App(): React.JSX.Element {

  const [isPlayerReady, setIsPaylerReady] = useState(false)

  async function setup() {
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPaylerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView>
      <StatusBar
      />
      <Text>Testings ok</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
