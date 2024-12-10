import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[styles.boton, {width}]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    boton: {
        width: 80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderWidth: 2,
    },

    botonNumero:{
        backgroundColor: 'yellow'
    },

    botonOperacion:{
        backgroundColor:'green'
    }

  });

  /*
  Colores dependiendo de la utilidad del boton
  no cambiar los botones de posicion(recomendacion)
  Fondo que no sea blanco

  Codigo: cosas a corregir
  Fusionar los dos componentes pantalla, (la unica diferencia es el tama¤o de letra de la hoja de estilo). Poner una propiedad para elegir el tama¤o
  
  
  
  */ 