import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AuditHeader from './AuditHeader';
import { MaterialIcons } from '@expo/vector-icons';

const LanguagePreference = () => {
  const languages = [
    { language: "en", languageName: "English" },
    { language: "es", languageName: "Spanish" },
    { language: "fr", languageName: "French" },
    { language: "de", languageName: "German" },
    { language: "zh", languageName: "Chinese" },
    { language: "ja", languageName: "Japanese" },
    { language: "hi", languageName: "Hindi" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AuditHeader text="Select Language" navigateTo="More" />
      <View style={styles.container}>
        {languages.map(({ language, languageName }, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.card, 
              selectedLanguage === language && styles.selectedCard
            ]} 
            onPress={() => handleLanguageSelect(language)}
          >
            <View style={styles.languageDetails}>
              <Text style={styles.languageText}>{language}</Text>
              <Text style={styles.languageNameText}>{languageName}</Text>
            </View>
            {selectedLanguage === language && (
              <MaterialIcons name="check" size={24} color="green" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default LanguagePreference;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: 'green',
  },
  languageDetails: {
    flexDirection: 'column',
  },
  languageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  languageNameText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  checkIcon: {
    marginLeft: 10,
  },
});
