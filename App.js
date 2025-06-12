import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FortuneCookieSVG from './components/FortuneCookieSVG';

const frases = [
  'Seu coração é sábio. Siga seus instintos.',
  'O sucesso está mais perto do que você imagina.',
  'A felicidade começa com um simples sorriso.',
  'Seja a mudança que você deseja ver no mundo.',
  'A paciência trará recompensas incríveis.',
  'Seus sonhos estão mais próximos do que nunca.',
  'A sorte favorece os corajosos. Não tenha medo!',
  'Um novo amor está prestes a bater à sua porta.',
  'O conhecimento é a chave para grandes conquistas.',
  'Sua criatividade trará soluções surpreendentes.',
  'Aproveite cada momento como se fosse único.',
  'A generosidade trará alegrias inesperadas.',
  'Seja gentil, pois o mundo precisa disso.',
  'O universo conspira a seu favor. Confie!',
  'O melhor ainda está por vir. Mantenha a fé!',
];

export default function App() {
  const [isBroken, setIsBroken] = useState(false);
  const [phrase, setPhrase] = useState('');

  const breakCookie = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setPhrase(frases[randomIndex]);
    setIsBroken(true);
  };

  const resetCookie = () => {
    setIsBroken(false);
    setPhrase('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <FortuneCookieSVG open={isBroken} message={phrase} />

        {phrase !== '' && (
          <Text style={styles.phrase}>
            "{phrase}"
          </Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={isBroken ? resetCookie : breakCookie}
        >
          <Text style={styles.buttonText}>
            {isBroken ? 'Tentar Novamente' : 'Quebrar Biscoito'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  phrase: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#6A4E42',
    textAlign: 'center',
    marginVertical: 35,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 35,
    elevation: 3,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
