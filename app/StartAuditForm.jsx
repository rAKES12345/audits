import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRouter } from 'expo-router';
import AuditHeader from './AuditHeader';

const StartAuditForm = () => {
  const router = useRouter();
  const { params } = router;
  const { company, date, name, location, type } = params || {};

  const [openLocation, setOpenLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

 
  const handleNext = () => {
    console.log('Next button pressed');
    router.navigate('Inspection');
  };

  const fields = [
    { label: "Location", type: 'dropdown' },
    { label: "Date", value: date },
    { label: "Name", value: name },
  ];

  const renderField = ({ item }) => {
    if (item.type === 'dropdown') {
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Location:</Text>
          <DropDownPicker
            open={openLocation}
            value={selectedLocation}
            items={location ? location.map(loc => ({ label: loc, value: loc })) : []}
            setOpen={setOpenLocation}
            setValue={setSelectedLocation}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            placeholder="Select a location"
            placeholderStyle={styles.placeholderText}
          />
        </View>
      );
    }

    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>{item.label}:</Text>
        {item.isText ? (
          <Text style={styles.textValue}>{item.value}</Text>
        ) : (
          <Text style={styles.input}>{item.value}</Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AuditHeader text="Start Audit" navigateTo="StartAudit" />
      <View style={styles.container}>
        <View style={styles.companyTypeContainer}>
          <Text style={styles.companyTypeText}>Company {company}</Text>
          <Text style={styles.companyTypeText}>Type {type}</Text>
        </View>
        <FlatList
          data={fields}
          renderItem={renderField}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.scrollContent}
        />
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingTop:0,
    paddingBottom: 80,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  textValue: {
    fontSize: 16,
    color: '#555555',
  },
  dropdown: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  dropdownContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderRadius: 8,
    borderWidth: 1,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000000',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888888',
  },
  input: {
    fontSize: 16,
    color: '#555555',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  button: {
    width: '90%',
    backgroundColor: '#085669',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  companyTypeContainer: {
    padding: 20,
    borderRadius: 8,
  },
  companyTypeText: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 20,
    fontWeight:'bold'
  },
});

export default StartAuditForm;
