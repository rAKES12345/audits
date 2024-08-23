import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AuditHeader from './AuditHeader';

const questions = [
  { id: '1', question: 'Are all employees wearing their name tag?', options: ['Yes', 'No', 'N/A'] },
  { id: '2', question: 'Is the area clean and organized?', options: ['Yes', 'No', 'N/A'] },
  { id: '3', question: 'Are safety procedures being followed?', options: ['Yes', 'No', 'N/A'] },
  { id: '4', question: 'Is the equipment functioning properly?', options: ['Yes', 'No', 'N/A'] },
  { id: '5', question: 'Are emergency exits clearly marked?', options: ['Yes', 'No', 'N/A'] },
];

const Inspection = () => {
  const renderQuestionCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.question}>{`Q${item.id}: ${item.question}`}</Text>
      <View style={styles.optionsContainer}>
        {item.options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionContainer}>
            <Text style={styles.option}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <AuditHeader text="Product" navigateTo="StartAuditForm" />
      <View style={styles.container}>
        <Text style={styles.title}>Employees</Text>
        <FlatList
          data={questions}
          renderItem={renderQuestionCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
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
    padding: 16,
    backgroundColor: '#e5efe8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    fontSize: 16,
    color: '#085669',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#d4fae7',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight:'bold'
  },
});

export default Inspection;
