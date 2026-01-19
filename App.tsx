import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  ConfigProvider,
  useAppConfig,
  useAppTheme,
} from "./src/core/providers/ConfigProvider";

const HomeScreen = () => {
  const config = useAppConfig();
  const theme = useAppTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.primary }]}>
        {config.displayName}
      </Text>

      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Text style={{ color: theme.colors.text }}>
          ID Interno: {config.id}
        </Text>
        <Text style={{ color: theme.colors.text }}>
          Feature Onboarding:{" "}
          {config.features.showOnboarding ? "ATIVO" : "INATIVO"}
        </Text>
      </View>

      <StatusBar
        style={theme.colors.background === "#1E1E1E" ? "light" : "dark"}
      />
    </View>
  );
};

export default function App() {
  return (
    <ConfigProvider>
      <HomeScreen />
    </ConfigProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Sombra Android
    shadowColor: "#000", // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
