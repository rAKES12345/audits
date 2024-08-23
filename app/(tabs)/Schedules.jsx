import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuditHeader from '../AuditHeader';

const AllAudits = ({ audits, getStatusStyle }) => {
  return (
    <View style={styles.auditList}>
      {audits.map(({ heading, id, product, city, performance }, index) => (
        <View key={index} style={styles.auditCard}>
          <Text style={styles.auditType}>{heading}</Text>
          <Text style={styles.auditCity}>{city}</Text>
          <Text style={styles.auditText}>{product}</Text>
          <View style={styles.footer}>
            <Text style={getStatusStyle(performance)}>{performance}</Text>
            {id && <Text>{id}</Text>}
          </View>
        </View>
      ))}
    </View>
  );
};

const Schedules = () => {
  const options = ["Open", "In Progress", "Completed", "Missed"];

  const [menuOption, setMenuOption] = useState('All');

  const handleMenuOption = (name) => {
    setMenuOption(name);
  };

  const allAudits = [
    {
      heading: 'Food Safety & Hygiene Checklist',
      product: 'BurgerFactory',
      city: 'New York',
      performance: 'Higher',
      id:'001'
    },
    {
      heading: 'Cleaning and Maintenance Audit',
      id: '002',
      product: 'Pizza Palace',
      city: 'Los Angeles',
      performance: 'Medium'
    },
    {
      heading: 'Service Quality Assessment',
      id: '003',
      product: 'Sushi World',
      city: 'Chicago',
      performance: 'Lower'
    },
    {
      heading: 'Health and Safety Inspection',
      id: '004',
      product: 'Taco Town',
      city: 'Houston',
      performance: 'Higher'
    }
  ];

  const filteredAudits = menuOption === 'All'
    ? allAudits
    : allAudits.filter(audit => audit.performance === menuOption);

  const getStatusStyle = (performance) => {
    switch (performance) {
      case 'Higher':
        return styles.higherPerformance;
      case 'Medium':
        return styles.mediumPerformance;
      case 'Lower':
        return styles.lowerPerformance;
      default:
        return styles.defaultPerformance;
    }
  };

  return (
    <ScrollView>
      <AuditHeader text="Schedules" navigateTo="Home" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>My Schedules</Text>
            <Text style={styles.dateText}>10 OCT '23 - 16 OCT '23</Text>
          </View>
          <View style={styles.menu}>
            {options.map((val, index) => (
              <TouchableOpacity key={index} style={styles.menuItem} onPress={() => handleMenuOption(val)}>
                <Text style={styles.menuText}>{val}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <AllAudits audits={filteredAudits} getStatusStyle={getStatusStyle} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Schedules;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:0,
    margin:0,
  },
  container: {
    paddingTop:0,
    marginTop:0,
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
  menuText: {
    color: '#b9b9bb',
    fontSize: 14,
    fontWeight: 'bold',
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
  auditCity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  auditText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderTopColor:'#808080',
    borderTopWidth:1,
    paddingTop:8
  },
  higherPerformance: {
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  mediumPerformance: {
    backgroundColor: '#FFA500',
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  lowerPerformance: {
    backgroundColor: '#FF6347',
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  defaultPerformance: {
    backgroundColor: '#A9A9A9',
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});
