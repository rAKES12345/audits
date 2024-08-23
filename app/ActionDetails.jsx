import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import AuditHeader from '../app/AuditHeader'
import { useNavigation } from 'expo-router';

const ActionDetails = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <AuditHeader text="Action Details" navigateTo="Actions" />
      <View style={styles.card}>
        <Text style={styles.cardText}>Basic Cleaning</Text>
        <Text style={styles.cardText}>Place</Text>
        <Text style={styles.cardText}>Product</Text>
        <Text style={styles.cardText}>Question</Text>
        <Text style={styles.cardText}>Question</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>id</Text>
        <Text style={styles.detailText}>Action Required:</Text>
        <Text style={styles.detailText}>Action</Text>
        <View style={styles.subDetailsContainer}>
          <Text style={styles.subDetailText}>Due in 3 Days</Text>
          <Text style={styles.subDetailText}>Need More Time?</Text>
        </View>
        <Text style={styles.statusText}>Open</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ApplyActions')}>
          <Text style={styles.buttonText} >Apply Actions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ActionDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5f1e9',
    width:'100%',
    height:'100%',
  },
  card: {
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal:20,
  },
  detailText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  subDetailsContainer: {
    marginBottom: 15,
  },
  subDetailText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 16,
    color: '#ff3b30',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#105c68',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
