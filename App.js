import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [image, setImage] = useState(require("./assets/biscoito.png"));
  const [luck, setLuck] = useState("");

  let frases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vai mais longe do que muito conhecimento.",
    "Quem quer colher rosas deve suportar os espinhos.",
    "São os nossos amigos que nos ensinam as mais valiosas lições.",
    "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.",
    "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Uma bela flor é incompleta sem suas folhas.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "Não há melhor negócio que a vida. A gente há obtém a troco de nada.",

    "Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.",
    "É mais fácil conseguir o perdão do que a permissão.",
  ];

  function handleLuck() {
    let randomFrase = Math.floor(Math.random() * frases.length);

    setLuck('"' + frases[randomFrase] + '"');
    setImage(require("./assets/biscoitoAberto.png"));
  }

  function handleResetCookie() {
    setLuck("");
    setImage(require("./assets/biscoito.png"));
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.text}>{luck}</Text>

      <TouchableOpacity style={styles.openButton} onPress={handleLuck}>
        <View style={styles.openButtonArea}>
          <Text style={styles.textButton}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.openButton, { marginTop: 15, borderColor: "#121212" }]}
        onPress={handleResetCookie}
      >
        <View style={styles.openButtonArea}>
          <Text style={[styles.textButton, { color: "#121212" }]}>
            Novo Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 20,
    margin: 30,
    color: "#dd7b22",
    textAlign: "center",
  },
  openButton: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 50,
  },
  openButtonArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
