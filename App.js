import React from 'react';
import type { Node } from 'react';
import Gestures from './components/Gestures';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Permission from './components/Permission';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      {/* <Gestures /> */}
      <Permission />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;