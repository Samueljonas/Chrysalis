import { IAppConfig } from "../core/types/AppConfig.types";
import { tarotConfig } from "./apps/tarot/config";
import { recipesConfig } from "./apps/recipes/config";

// Variantes disponíveis e seus arquivos de config
const apps: Record<string, IAppConfig> = {
  tarot: tarotConfig,
  recipes: recipesConfig,
};

//captura a variavel de ambiente injetaadaa no build
//  se não houver uma, define como "tarot" (safety callback)
const currentVariant = process.env.EXPO_PUBLIC_APP_VARIANT || "tarot";

// Fail-fast: Se a variante não existir, explode o app imediatamente.
// Melhor um crash no boot do que um comportamento indefinido.
if (!apps[currentVariant]) {
  throw new Error(
    `CRITICAL: App variant "${currentVariant}" not found configuration.`,
  );
}

console.log("[Chrysalis] Booting a: ${currentVariant}");

export const CurrentConfig = apps[currentVariant];
