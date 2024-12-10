import { StyleSheet } from 'react-native';
import { Colores } from './Colores';


export const GlobalStyles = StyleSheet.create({
    
    boton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius:20
        
    },
    textoBoton: {
            fontSize: 30,
            fontWeight: '300',
    },
   
    botonNumero: {
        backgroundColor: Colores.green,
        borderRadius:20
    },

    botonOperacion: {
        backgroundColor: Colores.yellow,
        borderRadius:20
    },

    botonEspecial: {
        backgroundColor: Colores.grey,
        borderRadius:20
    },

    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
        width: '90%',
        
      },
      pantallaSecundaria: {
        fontSize: 40,
        textAlign: 'right',
        width: '90%',
        
      },

      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        backgroundColor:Colores.beige
      },
      fila: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingHorizontal: 10,
        width: '100%',
      },

  });