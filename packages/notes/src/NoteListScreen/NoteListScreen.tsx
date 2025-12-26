// screens/notes/NotesListScreen.tsx
import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const NotesListScreen = ({ notes, onEditNote, onAddNote }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteItem}
            onPress={() => onEditNote(item.id)}
          >
            <Text style={styles.noteTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={onAddNote}>
        <Text style={styles.addText}>+ Add Note</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NotesListScreen;
