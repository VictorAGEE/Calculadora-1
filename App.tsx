import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/theme/Estilos';
import { Colores } from './src/theme/Colores';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacion,resultado  } = useCalculadora();

         enum Operadores {
          sumar = '+',
          restar = '-',
          multiplicar = '*',
          dividir = '/',
      } 

  const BOTON_NORMAL = 80;
  const BOTON_ANCHO = BOTON_NORMAL*2;

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit variante='principal'>{formula}</Pantalla>
      <Pantalla
        numberOfLines={1}
        adjustsFontSizeToFit
        variante="secundaria"

      >{formula === numeroAnterior ? '' : numeroAnterior}
      </Pantalla>

      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion label='C' width={BOTON_NORMAL} onPress={clean} tipo='otro'></BotonOperacion>
      <BotonOperacion label='+/-' width={BOTON_NORMAL} onPress={cambiarSigno} tipo='otro'></BotonOperacion>
      <BotonOperacion label='del' width={BOTON_NORMAL} onPress={borrarDigito} tipo='otro'></BotonOperacion>
      <BotonOperacion label='/' width={BOTON_NORMAL} onPress={()=>operacion(Operadores.dividir)} tipo='operacion'></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' width={BOTON_NORMAL} onPress={() =>construirNumero('7')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='8' width={BOTON_NORMAL} onPress={() =>construirNumero('8')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='9' width={BOTON_NORMAL} onPress={() =>construirNumero('9')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='x' width={BOTON_NORMAL} onPress={()=>operacion(Operadores.multiplicar)} tipo="operacion"></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' width={BOTON_NORMAL} onPress={() =>construirNumero('4')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='5' width={BOTON_NORMAL} onPress={() =>construirNumero('5')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='6' width={BOTON_NORMAL} onPress={() =>construirNumero('6')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='-' width={BOTON_NORMAL} onPress={()=>operacion(Operadores.restar)} tipo="operacion"></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' width={BOTON_NORMAL} onPress={() =>construirNumero('1')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='2' width={BOTON_NORMAL} onPress={() =>construirNumero('2')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='3' width={BOTON_NORMAL} onPress={() =>construirNumero('3')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='+' width={BOTON_NORMAL} onPress={()=>operacion(Operadores.sumar)} tipo="operacion"></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' width={BOTON_ANCHO} onPress={() =>construirNumero('0')} tipo="numero"></BotonOperacion>
      <BotonOperacion label='.' width={BOTON_NORMAL} onPress={() =>construirNumero('.')} tipo="otro"></BotonOperacion>
      <BotonOperacion label='=' width={BOTON_NORMAL} onPress={resultado} tipo="operacion"></BotonOperacion>
    </View>
    </View>

  );
}