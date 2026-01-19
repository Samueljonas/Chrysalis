import { IAppConfig } from "../../../core/types/AppConfig.types";

export const tarotConfig: IAppConfig = {
  id: "tarot",
  displayName: "Mystic Tarot",
  bundleId: "com.chrysalisapps.mystictarot",
  features: {
    showOnboarding: true,
  },
  theme: {
    colors: {
      primary: "#6D28D9",
      background: "#1E1E1E",
      text: "#E5E7EB",
      card: "#2D2D2D",
    },
  },
};
