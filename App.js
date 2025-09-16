import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    const sum = (parseFloat(num1) || 0) + (parseFloat(num2) || 0);
    setResult(sum);
    const newHistory = `${num1} + ${num2} = ${sum}`;
    setHistory([...history, newHistory]);
    setNum1("");
    setNum2("");
  };

  const handleSubtract = () => {
    const difference = (parseFloat(num1) || 0) - (parseFloat(num2) || 0);
    setResult(difference);
    const newHistory = `${num1} - ${num2} = ${difference}`;
    setHistory([...history, newHistory]);
    setNum1("");
    setNum2("");
  };

  return (
    <View style={styles.container}>

      {result !== null && (
        <Text style={styles.result}>Tulos: {result}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Anna numero"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Anna numero"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleAdd} />
        <Button title="-" onPress={handleSubtract} />
      </View>

      <Text style={styles.historyTitle}>History</Text>

      <FlatList
        data={history} renderItem={({item}) => <Text style={styles.historyItem}>{item}</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
    padding: 20,
  },

  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 10,
    marginBottom: 20,
  },

  result: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },

   historyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },

  historyItem: {
    fontSize: 16,
    paddingVertical: 2,
  },

});
