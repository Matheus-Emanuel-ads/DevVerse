import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { servicos, deletarServico } from "../../data/servicos";

export default function DashboardDev() {
  const navigation = useNavigation<any>();
  const [lista, setLista] = useState(servicos);

  useEffect(() => {
    setLista([...servicos]);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Serviços</Text>

      {lista.map((s) => (
        <View key={s.id} style={styles.card}>
          <Text style={styles.nome}>{s.nome}</Text>
          <Text style={styles.desc}>{s.descricao}</Text>
          <Text style={styles.preco}>R$ {s.preco}</Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.edit}
              onPress={() => navigation.navigate("EditarServico", { servico: s })}
            >
              <Text style={styles.btnText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.delete}
              onPress={() => {
                deletarServico(s.id);
                setLista([...servicos]);
              }}
            >
              <Text style={styles.btnText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("CriarServico")}
      >
        <Text style={styles.addText}>+ Criar Serviço</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0f172a" },
  title: { fontSize: 24, color: "#fff", marginBottom: 20 },
  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  nome: { fontSize: 18, color: "#fff", fontWeight: "bold" },
  desc: { color: "#cbd5f5", marginVertical: 5 },
  preco: { color: "#22c55e", fontWeight: "bold" },
  actions: { flexDirection: "row", marginTop: 10 },
  edit: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  delete: {
    backgroundColor: "#ef4444",
    padding: 10,
    borderRadius: 8,
  },
  btnText: { color: "#fff" },
  addButton: {
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  addText: { color: "#fff", fontWeight: "bold" },
});