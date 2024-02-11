import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

export const Division = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const validacion = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (parsedNum1 === 0 && parsedNum2 === 0) {
      setResult(`INDETERMINACIÓN`);
    } else if (parsedNum2 === 0) {
      setResult(`NO EXISTE DIVISIÓN PARA CERO`);
    } else {
      const divisionResult = parsedNum1 / parsedNum2;
      setResult(`El resultado de la división es: ${divisionResult}`);
    }
  };

  return (
    <View>
      <Text style={styles.textBig}>División</Text>
      <View>
        <Text style={styles.titleNormal}>Campo número 1:</Text>
        <TextInput
          style={styles.textCampo}
          keyboardType="numeric"
          value={num1}
          onChangeText={(text) => setNum1(text)}
        />
      </View>
      <View>
        <Text style={styles.titleNormal}>Campo número 2:</Text>
        <TextInput
          style={styles.textCampo}
          keyboardType="numeric"
          value={num2}
          onChangeText={(text) => setNum2(text)}
        />
      </View>

      <TouchableOpacity onPress={validacion}>
        <Text style={styles.textButoon}>Dividir</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titleResultado}>{result}</Text>
      </View>
    </View>
  );
};
