export interface IAppTheme {
  colors: {
    primary: string;
    background: string;
    text: string;
    card: string;
  };
}

export interface IAppConfig {
  id: string;
  displayName: string;
  bundleId: string;
  theme: IAppTheme;
  features: {
    // exemplo de feature flag, nem todo app vai ter onboarding
    showOnboarding: boolean;
  };
}
