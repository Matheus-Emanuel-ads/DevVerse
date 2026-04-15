import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { atualizarServico } from "../../data/servicos";

export default function EditarServico() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { servico } = route.params;

  const [nome, setNome] = useState(servico.nome);
  const [descricao, setDescricao] = useState(servico.descricao);
  const [preco, setPreco] = useState(servico.preco);

  return (
    <View style={styles.container}>
      <TextInput value={nome} style={styles.input} onChangeText={setNome} />
      <TextInput value={descricao} style={styles.input} onChangeText={setDescricao} />
      <TextInput value={preco} style={styles.input} onChangeText={setPreco} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          atualizarServico({
            id: servico.id,
            nome,
            descricao,
            preco,
          });
          navigation.goBack();
        }}
      >
        <Text style={styles.text}>Atualizar</Text>
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
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: { color: "#fff", fontWeight: "bold" },
});