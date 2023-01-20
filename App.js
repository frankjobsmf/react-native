import { NavigationContainer } from '@react-navigation/native';
import { VtAppProvider } from './context/VtAppProvider';
import { VtApp } from './VtApp';

export default function App() {
  return (
    <VtAppProvider>
      <NavigationContainer>
        <VtApp />
      </NavigationContainer>
    </VtAppProvider>
  );
}
