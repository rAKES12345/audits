import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Ensure this is correctly installed
import { useNavigation } from '@react-navigation/native'; // Adjust according to your navigation setup
import { Pressable } from 'react-native';

const AuditHeader = ({ text, navigateTo }) => {
  const navigation = useNavigation();
  
  const handleRedirection = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <View style={styles.startAuditContainer}>
      <Pressable onPress={handleRedirection} >
        <FontAwesome5 name="chevron-left" size={24} color="white" />
      </Pressable>
        <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default AuditHeader;

const styles = StyleSheet.create({
  startAuditContainer: {
    paddingTop:60,
    padding: 15,
    backgroundColor: '#085669',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 25,
    flex: 1, // Allows text to take up remaining space and center it
  },
});
