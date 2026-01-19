import { IAppConfig } from "../../../core/types/AppConfig.types";

export const recipesConfig: IAppConfig = {
  id: "Recipes",
  displayName: "Chef Kitchen",
  bundleId: "com.chefkitchen.app",
  features: {
    showOnboarding: false, //chef vai direto ao ponto
  },
  theme: {
    colors: {
      primary: "#F97316",
      background: "#FFFFFF",
      text: "#1F2937",
      card: "#F3F4F6",
    },
  },
};
