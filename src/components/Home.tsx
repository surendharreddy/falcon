import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle} testID={'home-message'}>
            Falcon Home Screen
          </Text>
        </View>
      </SafeAreaView>
    </View>
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
});

export default Home;
