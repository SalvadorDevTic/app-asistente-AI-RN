import RNCallKeep from 'react-native-callkeep';
import { PermissionsAndroid } from 'react-native';


export const configRNCallKeep=()=>{
  
  const options = {
    ios: {
      appName: 'Mi aplicación',
    },
    android: {
      alertTitle: 'Permisos requeridos',
      alertDescription: 'Esta aplicación necesita acceder a tus cuentas telefónicas',
      cancelButton: 'Cancelar',
      okButton: 'OK',
      imageName: 'phone_account_icon',
      additionalPermissions: [PermissionsAndroid.PERMISSIONS.READ_CALL_LOG],
      foregroundService: {
        channelId: 'com.company.my',
        channelName: 'Servicio en primer plano para mi aplicación',
        notificationTitle: 'Mi aplicación está ejecutándose en segundo plano',
        notificationIcon: 'Path to the resource icon of the notification',
      },
    },
  };
  
  
  RNCallKeep.then((accepted) => {
    // Configuración completada
  })
  // .setAvailable(true)
  .catch((e)=>{
    console.error('Saltado el catch')
    console.log(e)
  })
  return 'Esta dentro del js'
  
}
