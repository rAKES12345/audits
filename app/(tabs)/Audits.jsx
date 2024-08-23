import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import AuditHeader from '../AuditHeader';

const AllAudits = ({ audits, getStatusStyle }) => {
  return (
    <View style={styles.auditList}>
      {audits.map(({ heading, c1, id, product, name, date, status, score }) => (
        <View key={id} style={styles.auditCard}>
          <View style={styles.heading}>
            <Text style={styles.auditHeading}>{heading}</Text>
            <TouchableOpacity>
              <Feather name="more-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.auditText}>{c1}</Text>
          <Text style={styles.auditText}>{id}</Text>
          <Text style={styles.auditText}>{product}</Text>
          <View style={styles.s1}>
            <Text style={styles.auditText}>{name}</Text>
            <Text style={styles.auditText}>{date}</Text>
          </View>
          <View style={styles.s1}>
            <Text style={[styles.auditStatus, getStatusStyle(status)]}>{status}</Text>
            <Text style={styles.auditScore}>Score: {score}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const Audits = () => {
  const options = ["All", "In Progress", "For Review", "Completed", "Rejected"];
  const [menuOption, setMenuOption] = useState('All');

  const handleMenuOption = (name) => {
    setMenuOption(name);
  };

  const allAudits = [
    {
      heading: 'Food Safety & Hygiene Checklist',
      c1: 'Liverpool',
      id: '2140180',
      product: 'Top Cakes',
      name: 'Maria',
      date: '16 Oct 2023',
      status: 'Completed',
      score: '45.57%',
    },
    {
      heading: 'Warehouse Safety Audit',
      c1: 'Manchester',
      id: '2140192',
      product: 'General Goods',
      name: 'John Doe',
      date: '15 Oct 2023',
      status: 'In Progress',
      score: '70.20%',
    },
    {
      heading: 'Environmental Impact Assessment',
      c1: 'Bristol',
      id: '2140205',
      product: 'Paper Products',
      name: 'Sarah Connor',
      date: '14 Oct 2023',
      status: 'For Review',
      score: '82.30%',
    },
    {
      heading: 'Fire Safety Inspection',
      c1: 'Birmingham',
      id: '2140211',
      product: 'Chemicals',
      name: 'Mark Smith',
      date: '13 Oct 2023',
      status: 'Rejected',
      score: '38.75%',
    },
    {
      heading: 'Health & Safety Assessment',
      c1: 'London',
      id: '2140223',
      product: 'Office Supplies',
      name: 'Jane Doe',
      date: '12 Oct 2023',
      status: 'Completed',
      score: '92.50%',
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
      default:
        return styles.defaultStatus;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <AuditHeader text={"Recent Audits"} navigateTo={"Home"} />
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Recent</Text>
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
    </ScrollView>
      </SafeAreaView>
  );
};

export default Audits;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
    backgroundColor: '#e5f1e9',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  auditStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    textAlign: 'center',
  },
  auditScore: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4682b4',
  },
  s1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
