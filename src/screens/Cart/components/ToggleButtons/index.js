import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';

const ToggleButtons = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default is Monthly
  const togglePosition = new Animated.Value(1);

  const handleTogglePress = index => {
    setActiveIndex(index);

    Animated.timing(togglePosition, {
      toValue: index * 120, // Assuming each button has a width of 120
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.toggleContainer}>
      {/* Background Highlight */}
      <Animated.View
        style={[styles.toggleBackground, {left: togglePosition}]}
      />

      {/* Buttons */}
      {['Weekly', 'Monthly', 'Yearly'].map((label, index) => (
        <TouchableOpacity
          key={index}
          style={styles.toggleButton}
          onPress={() => handleTogglePress(index)}>
          <Text
            style={[
              styles.toggleText,
              activeIndex === index && styles.activeToggleText,
            ]}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    width: 360,
  },
  toggleBackground: {
    position: 'absolute',
    height: '100%',
    width: 120, // Same as button width
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },
  toggleButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    color: '#7e7e7e',
  },
  activeToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ToggleButtons;
