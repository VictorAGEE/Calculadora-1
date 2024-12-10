import { Pressable, Text, StyleSheet } from "react-native";
import {Colores} from '../theme/Colores';
import { GlobalStyles } from "../theme/Estilos";

interface Props {
    label: string,
    width: number,
    onPress?: () => void;
    tipo: 'numero' | 'operacion' | 'otro'
}

export const BotonOperacion = ({label, width, onPress,tipo}:Props) => {
    const estiloTipo = 
    tipo === 'numero' ? GlobalStyles.botonNumero: 
    tipo === 'operacion' ? GlobalStyles.botonOperacion : 
    GlobalStyles.botonEspecial;

    return (
        <Pressable onPress={onPress} style={[estiloTipo]}>
            <Text 
                style={[GlobalStyles.boton, {width}]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};

  /*
  Colores dependiendo de la utilidad del boton
  no cambiar los botones de posicion(recomendacion)
  Fondo que no sea blanco

  Codigo: cosas a corregir
  Fusionar los dos componentes pantalla, (la unica diferencia es el tama¤o de letra de la hoja de estilo). Poner una propiedad para elegir el tama¤o
  
  
  
  */ 