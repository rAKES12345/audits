import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AuditHeader from './AuditHeader';
import { useNavigation } from 'expo-router';

const StartAudit = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const navigator = useNavigation();

  const companies = [
    { label: 'York Hotel', value: 'york_hotel' },
    { label: 'Grand Hyatt', value: 'grand_hyatt' },
    { label: 'The Ritz-Carlton', value: 'ritz_carlton' },
    { label: 'Hilton Garden Inn', value: 'hilton_garden_inn' },
    { label: 'Marriott Hotel', value: 'marriott_hotel' },
    { label: 'Four Seasons', value: 'four_seasons' },
    { label: 'Holiday Inn', value: 'holiday_inn' },
    { label: 'Sheraton', value: 'sheraton' },
    { label: 'Westin', value: 'westin' },
    { label: 'InterContinental', value: 'intercontinental' },
  ];

  const hotelContent = {
    york_hotel: [
      { id: '1', text: 'Luxury accommodations in the heart of the city.', date: '30 Oct 2002', location: ['India', 'US', 'Russia', 'UK'], type: 'Luxury', name: 'Maria' },
      { id: '2', text: 'Fine dining options available.', date: '15 Nov 2022', location: ['India', 'US', 'Russia', 'UK'], type: 'Dining', name: 'John' },
      { id: '3', text: 'Spa services and wellness programs.', date: '01 Jan 2023', location: ['India', 'US', 'Russia', 'UK'], type: 'Spa', name: 'Anna' }
    ],
    grand_hyatt: [
      { id: '1', text: 'Top-notch amenities and services for guests.', date: '20 Sep 2022', location: ['India', 'US', 'Russia', 'UK'], type: 'Amenities', name: 'Laura' },
      { id: '2', text: 'Award-winning restaurants and bars.', date: '10 Oct 2023', location: ['India', 'US', 'Russia', 'UK'], type: 'Restaurants', name: 'Mike' },
      { id: '3', text: 'Business center and conference rooms.', date: '05 Feb 2024', location: ['India', 'US', 'Russia', 'UK'], type: 'Business', name: 'Emma' }
    ],
    ritz_carlton: [
      { id: '1', text: 'Elegant rooms with city views.', date: '12 Aug 2022', location: ['France', 'Spain', 'Italy', 'Germany'], type: 'Elegant', name: 'Sophia' },
      { id: '2', text: 'Premium spa and wellness facilities.', date: '25 Dec 2022', location: ['France', 'Spain', 'Italy', 'Germany'], type: 'Spa', name: 'James' },
      { id: '3', text: 'Gourmet dining experience.', date: '10 Nov 2023', location: ['France', 'Spain', 'Italy', 'Germany'], type: 'Dining', name: 'Oliver' }
    ],
    hilton_garden_inn: [
      { id: '1', text: 'Comfortable rooms with modern amenities.', date: '18 Jun 2022', location: ['Canada', 'Mexico', 'Brazil', 'Argentina'], type: 'Comfort', name: 'Emily' },
      { id: '2', text: 'On-site restaurant and bar.', date: '30 Sep 2022', location: ['Canada', 'Mexico', 'Brazil', 'Argentina'], type: 'Dining', name: 'Daniel' },
      { id: '3', text: 'Convenient location for business travelers.', date: '02 Jan 2023', location: ['Canada', 'Mexico', 'Brazil', 'Argentina'], type: 'Business', name: 'Liam' }
    ],
    marriott_hotel: [
      { id: '1', text: 'Luxurious suites with personalized service.', date: '15 Jul 2022', location: ['Japan', 'South Korea', 'China', 'Thailand'], type: 'Luxury', name: 'Olivia' },
      { id: '2', text: 'Innovative dining options and lounges.', date: '20 Nov 2022', location: ['Japan', 'South Korea', 'China', 'Thailand'], type: 'Dining', name: 'Ethan' },
      { id: '3', text: 'State-of-the-art fitness center.', date: '05 Mar 2023', location: ['Japan', 'South Korea', 'China', 'Thailand'], type: 'Fitness', name: 'Ava' }
    ],
  };

  const handleNavigate = (item) => {
    navigator.navigate('StartAuditForm', {
      company: item.text,
      type: item.type,
      location: item.location,
      date: item.date,
      name: item.name,
    });
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <AuditHeader text="Start Audit" navigateTo="Home" />
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={companies}
          setOpen={setOpen}
          setValue={setValue}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          placeholder="Select a company"
          placeholderStyle={styles.placeholderText}
        />
        <ScrollView style={styles.contentContainer}>
          {value && hotelContent[value] && hotelContent[value].map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.itemContainer}
              onPress={() => handleNavigate(item)}
            >
              <Text style={styles.hotelDescription}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  dropdown: {
    width: '100%',
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
  contentContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '100%',
  },
  hotelDescription: {
    fontSize: 16,
    color: '#333333',
  },
});

export default StartAudit;
