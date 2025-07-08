import { useState } from "react";
import { Text, IconButton, TextInput } from "react-native-paper";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import handleResponse from '../../lib/agentauth'

export default function MedicalAssist() {
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([]);
  const [text, setText] = useState<string>("");

  const handleSubmit = async () => {
    if (!text.trim()) return;
    const reply = await handleResponse(text)
    
    setMessages((prev) => [
      ...prev,
      { text, from: "user" },
      { text: reply, from: "bot" }, // mock reply
    ]);
    setText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.messages}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.from === "user" ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputview}>
        <TextInput
          style={styles.input}
          placeholder="Ask any question related to your health"
          value={text}
          onChangeText={setText}
          mode="outlined"
        />
        <IconButton
          icon="send"
          mode="contained"
          onPress={handleSubmit}
          style={styles.sendButton}
          iconColor="#1E90FF"
        />
      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messages: {
    flexGrow: 1,
    padding: 16,
    backgroundColor:'#D3D3D3'
  },
  messageBubble: {
    backgroundColor: "#B0C4DE",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  inputview: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderColor: "#1E90FF",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    marginRight: 8
  },
  sendButton: {
    margin: 0,
  },
  userBubble: {
    backgroundColor: "#B0C4DE",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  botBubble: {
    backgroundColor: "#87CEFA",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
  }
});
