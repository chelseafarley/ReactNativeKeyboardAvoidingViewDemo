import { StyleSheet, Text, TextInput, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import React from 'react';

export default function App() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text>Hi there, enter some text below:</Text>
        <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: "green",
    borderBottomWidth: 2,
    alignSelf: "stretch",
    margin: 16,
    padding: 8
  }
});
