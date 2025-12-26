// screens/notes/EditNoteScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const EditNoteScreen = ({ note, onSave, onBack }: any) => {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Save" onPress={() => onSave(title, content)} />
      <Button title="Back" onPress={onBack} />
    </View>
  );
};

export default EditNoteScreen;
