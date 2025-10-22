import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './configstyle.js';

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.title}>Contato</Text>

        <View style={styles.contactDetailsContainer}>
          <Icon name="mail-outline" size={24} color="#3A5A40" />
          <Text style={styles.contactText}>planttools@gmail.com</Text>
        </View>

        <View style={styles.contactDetailsContainer}>
          <Icon name="call-outline" size={24} color="#3A5A40" />
          <Text style={styles.contactText}>12345678</Text>
        </View>

        <View style={styles.contactDetailsContainer}>
          <Icon name="location-outline" size={24} color="#3A5A40" />
          <Text style={styles.contactText}>www.planttools.com</Text>
        </View>

        <Text style={styles.formTitle}>Entre em contato</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Mensagem"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.contactLogoContainer}>
          <Image
            source={require('../../../assets/shrek-pizzaria-logo.png')} // Use your actual logo here
            style={styles.contactLogo}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
