import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Platform, Image, Alert } from 'react-native';
import AuditHeader from './AuditHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useRouter } from 'expo-router';

const ApplyActions = () => {
  const navigation=useRouter();
  const [formData, setFormData] = useState({
    comments: '',
    imageProof: null,
    selectedStatus: null,
    completionDate: new Date(),
  });

  const [statusOpen, setStatusOpen] = useState(false);
  const [statusItems, setStatusItems] = useState([
    { label: 'Pending', value: 'pending' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Completed', value: 'completed' },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || formData.completionDate;
    setFormData({
      ...formData,
      completionDate: currentDate,
    });
  };

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        Alert.alert('Error', 'Could not select image');
      } else {
        const imageUri = response.assets[0].uri;
        handleInputChange('imageProof', imageUri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuditHeader text="Apply Actions" navigateTo="ActionDetails" />
      <View style={styles.form}>
        <Text style={styles.label}>Comments</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter your comments"
          value={formData.comments}
          onChangeText={(text) => handleInputChange('comments', text)}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Add Image for Proof</Text>
        <TouchableOpacity
          style={styles.fileInputButton}
          onPress={handleImagePicker}
        >
          <Text style={styles.fileInputButtonText}>Upload Image</Text>
        </TouchableOpacity>

        {formData.imageProof && (
          <Image source={{ uri: formData.imageProof }} style={styles.image} />
        )}

        <Text style={styles.label}>Select new status</Text>
        <DropDownPicker
          open={statusOpen}
          value={formData.selectedStatus}
          items={statusItems}
          setOpen={setStatusOpen}
          setValue={(value) => handleInputChange('selectedStatus', value)}
          setItems={setStatusItems}
          placeholder="Select status..."
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropDownContainerStyle={styles.dropdownContainer}
        />

        <Text style={styles.label}>Completion date</Text>
        <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>{formData.completionDate.toDateString()}</Text>
          <Icon name="calendar-today" size={24} color="#007bff" />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={formData.completionDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn1} onPress={() => console.log('Cancel pressed')}>
            <Text style={styles.btn1Text}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => {console.log('Form Data:', formData);}}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    marginTop: 16,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  fileInputButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  fileInputButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  dateText: {
    flex: 1,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  btn1:{
    backgroundColor:'transparent',
    borderWidth:1,
    borderColor:'gray',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  btn2:{
    backgroundColor:'#085669',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  btn1Text:{
    color:'#000000',
    fontSize:16
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 16,
    borderRadius: 8,
  },
});

export default ApplyActions;
