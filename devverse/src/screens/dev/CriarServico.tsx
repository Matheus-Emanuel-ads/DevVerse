import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { adicionarServico } from "../../data/servicos";

export default function CriarServico() {
  const navigation = useNavigation<any>();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
      <TextInput placeholder="Descrição" style={styles.input} onChangeText={setDescricao} />
      <TextInput placeholder="Preço" style={styles.input} onChangeText={setPreco} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          adicionarServico({
            id: Date.now(),
            nome,
            descricao,
            preco,
          });
          navigation.goBack();
        }}
      >
        <Text style={styles.text}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0f172a" },
  input: {
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: { color: "#fff", fontWeight: "bold" },
});