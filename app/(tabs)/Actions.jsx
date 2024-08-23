import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuditHeader from '../AuditHeader';
import { useNavigation } from 'expo-router';

const AllAudits = ({ audits, getStatusStyle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.auditList}>
      {audits.map(({ heading, id, product, date, city, status }, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.auditCard, getStatusStyle(status)]} // Apply dynamic styling
          onPress={() => navigation.navigate('ActionDetails')}
        >
          <Text style={styles.auditType}> {heading}</Text>
          <View style={styles.heading}>
            <Text style={styles.auditHeading}>{city}</Text>
          </View>
          <Text style={styles.auditText}> {date}</Text>
          <Text style={styles.auditText}> {product}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Schedules = () => {
  const options = ["All", "To Do", "Overdue", "Closed", "In Progress"];

  const [menuOption, setMenuOption] = useState('All');

  const handleMenuOption = (name) => {
    setMenuOption(name);
  };

  const allAudits = [
    {
      heading: 'Food Safety & Hygiene Checklist',
      id: '001',
      product: 'BurgerFactory',
      date: '17 Oct 2023, 9:00 AM - 5:00 PM',
      city: 'New York',
      status: 'Completed'
    },
    {
      heading: 'Cleaning and Maintenance Audit',
      id: '002',
      product: 'Pizza Palace',
      date: '18 Oct 2023, 10:00 AM - 4:00 PM',
      city: 'Los Angeles',
      status: 'In Progress'
    },
    {
      heading: 'Service Quality Assessment',
      id: '003',
      product: 'Sushi World',
      date: '19 Oct 2023, 11:00 AM - 3:00 PM',
      city: 'Chicago',
      status: 'For Review'
    },
    {
      heading: 'Health and Safety Inspection',
      id: '004',
      product: 'Taco Town',
      date: '20 Oct 2023, 1:00 PM - 6:00 PM',
      city: 'Houston',
      status: 'Rejected'
    },
    {
      heading: 'Facility Maintenance Check',
      id: '005',
      product: 'Gym Masters',
      date: '21 Oct 2023, 8:00 AM - 2:00 PM',
      city: 'Miami',
      status: 'To Do'
    },
    {
      heading: 'Annual Compliance Review',
      id: '006',
      product: 'Tech Hub',
      date: '22 Oct 2023, 12:00 PM - 4:00 PM',
      city: 'San Francisco',
      status: 'Overdue'
    },
    {
      heading: 'Customer Satisfaction Survey',
      id: '007',
      product: 'Cafe Delight',
      date: '23 Oct 2023, 10:00 AM - 5:00 PM',
      city: 'Seattle',
      status: 'Closed'
    },
    {
      heading: 'Quarterly Performance Review',
      id: '008',
      product: 'Office Supplies',
      date: '24 Oct 2023, 9:00 AM - 3:00 PM',
      city: 'Austin',
      status: 'In Progress'
    },
    {
      heading: 'Safety Protocol Audit',
      id: '009',
      product: 'Manufacturing Unit',
      date: '25 Oct 2023, 10:00 AM - 4:00 PM',
      city: 'Philadelphia',
      status: 'Completed'
    },
  ];

  const filteredAudits = menuOption === 'All'
    ? allAudits
    : allAudits.filter(audit => audit.status === menuOption);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return styles.completedStatus;
      case 'In Progress':
        return styles.inProgressStatus;
      case 'For Review':
        return styles.forReviewStatus;
      case 'Rejected':
        return styles.rejectedStatus;
      case 'To Do':
        return styles.defaultStatus; // Reuse defaultStatus for 'To Do'
      case 'Overdue':
        return styles.defaultStatus; // Reuse defaultStatus for 'Overdue'
      case 'Closed':
        return styles.defaultStatus; // Reuse defaultStatus for 'Closed'
      default:
        return styles.defaultStatus;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <AuditHeader text="Actions" navigateTo="Home" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>My Actions</Text>
            <Text style={styles.dateText}>10 OCT '23 - 16 OCT '23</Text>
          </View>
          <View style={styles.menu}>
            {options.map((val, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.menuItem,
                  menuOption === val && styles.menuItemActive
                ]}
                onPress={() => handleMenuOption(val)}
              >
                <Text
                  style={[
                    styles.menuText,
                    menuOption === val && styles.menuTextActive
                  ]}
                >
                  {val}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <AllAudits audits={filteredAudits} getStatusStyle={getStatusStyle} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedules;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: -60,
    padding: 0,
  },
  container: {
    padding: 20,
    backgroundColor: '#e5f1e9',
    borderRadius: 20,
    flex: 1,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#fbfdfe',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  menuItemActive: {
    backgroundColor: '#d7eaf9',
  },
  menuText: {
    color: '#b9b9bb',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuTextActive: {
    color: '#333',
  },
  auditList: {
    marginTop: 20,
  },
  auditCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  heading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  auditHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  auditText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  auditType: {
    backgroundColor: '#d7eaf9',
    color: '#808080',
    width: 'max-content',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  auditStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    textAlign: 'center',
  },
  s1: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  completedStatus: {
    backgroundColor: '#4CAF50',
    color: '#ffffff',
  },
  inProgressStatus: {
    backgroundColor: '#FFA500',
    color: '#ffffff',
  },
  forReviewStatus: {
    backgroundColor: '#1E90FF',
    color: '#ffffff',
  },
  rejectedStatus: {
    backgroundColor: '#FF6347',
    color: '#ffffff',
  },
  defaultStatus: {
    backgroundColor: '#A9A9A9',
    color: '#ffffff',
  },
});
