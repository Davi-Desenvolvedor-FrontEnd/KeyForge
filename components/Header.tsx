import { estilos } from '@/global_styles/styles';
import { Text, View } from 'react-native';
interface HeaderProps {
  title: string;
}
export default function Header ({ title }: HeaderProps) {
 return (
   <View style={estilos.Header}>
    <Text style={estilos.Title}>{title}</Text>
   </View>
  );
}