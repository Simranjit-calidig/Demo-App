import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorPosition = new Animated.Value(0);

  const handleTabPress = index => {
    setActiveTab(index);

    Animated.timing(indicatorPosition, {
      toValue: index * 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabs}>
        {['Profit', 'Company', 'Candidates'].map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => handleTabPress(index)}>
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.View style={[styles.indicator, {left: indicatorPosition}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'relative',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tab: {
    paddingVertical: 10,
    width: 100,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: 100, // Same width as the tab
    backgroundColor: '#007BFF',
  },
});

export default TabNavigation;
