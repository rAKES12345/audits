import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const More = () => {
  const moreOptions = [
    { title: "Import Settings", icon: "settings" },
    { title: "Data Backup", icon: "backup" },
    { title: "Privacy Policy", icon: "security" },
    { title: "Terms of Use", icon: "gavel" },
    { title: "Get Help", icon: "help" },
    { title: "Feedback", icon: "feedback" },
    { title: "Language", icon: "language" }
  ];
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profilePicture}>
            <Text style={styles.profileText}>P</Text>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.username}>User Name</Text>
            <Text style={styles.email}>Email</Text>
          </View>
        </View>
        <View style={styles.options}>
          {moreOptions.map((option, index) => (
            <TouchableOpacity key={index} style={[styles.optionItem, index < moreOptions.length - 1 && styles.optionItemWithMargin]}
             onPress={()=>{
              if(option.title==='Language'){
                navigation.navigate('LanguagePreference')
              }
             }}>
              <MaterialIcons name={option.icon} size={24} color="#333" style={styles.optionIcon} />
              <Text style={styles.optionText}>{option.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name="logout" size={24} color="white" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e0efe9',
    height:'100%'
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#e0efe9',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#085669',
    paddingVertical: 20,
    paddingLeft: 30,
  },
  profilePicture: {
    backgroundColor: '#d1d1d1',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  profileText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileDetails: {
    justifyContent: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  email: {
    fontSize: 14,
    color: '#ffffff',
  },
  options: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  optionItemWithMargin: {
    marginBottom: 10,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButtonContainer: {
    marginTop: 'auto',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
