import React, { createContext, useContext, ReactNode, use } from "react";
import { IAppConfig, IAppTheme } from "../types/AppConfig.types";
import { CurrentConfig } from "../../config";

//Cria o contexto com valor inicial
const ConfigContext = createContext<IAppConfig>(CurrentConfig);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigContext.Provider value={CurrentConfig}>
      {children}
    </ConfigContext.Provider>
  );
};

//Hooks para consumo fácil

export const useAppConfig = (): IAppConfig => {
  const context = useContext(ConfigContext);
  if (!context)
    throw new Error("useAppConfig must be used within a ConfigProvider");
  return context;
};

export const useAppTheme = (): IAppTheme => {
  const { theme } = useAppConfig();
  return theme;
};
