import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../theme/Estilos';

interface Props extends TextProps {
  variante?: 'principal' | 'secundaria';
};

export const Pantalla = ({children, variante, ...rest}:Props) => {
  const estilo =
    variante === 'principal'
      ? GlobalStyles.pantallaPrincipal
      : GlobalStyles.pantallaSecundaria;

  return (
    <Text style={estilo} {...rest}>
        {children}
    </Text>
  )
}


