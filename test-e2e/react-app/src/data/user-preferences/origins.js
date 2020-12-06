import { LocalStorage } from "@data-provider/browser-storage";

export const userPreferences = new LocalStorage("user-preferences", {
  storageFallback: false,
});

userPreferences.addQuery("cookiesAccepted", () => ({
  prop: "cookiesAccepted",
}));
