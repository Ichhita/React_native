import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SignInScreen from './src/screens/signinScreen';
import SignUpScreen from './src/screens/signupScreen';
import ConfirmEmailScreen from './src/screens/confirmemailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      {/* <Navigation/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#041C32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
