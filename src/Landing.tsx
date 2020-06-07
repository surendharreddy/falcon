import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { LandingProps } from './types';

const Landing: React.SFC<LandingProps> = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Falcon Landing Screen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textLink}>Go To Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  textLink: {
    marginTop: 16,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Landing;
