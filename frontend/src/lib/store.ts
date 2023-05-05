import { create } from "zustand";
import { ScreenType } from "../App";

type StateStoreType = {
  currentScreen: ScreenType;
  setCurrentScreen: (s: ScreenType) => void;

  selectedMushroom: number | null;
  setSelectedMushroom: (id: number | null) => void;

  selectedNewsStory: number | null;
  setSelectedNewsStory: (id: number | null) => void;

  selectedTheme: "dark" | "light" | "system";
  setSelectedTheme: (theme: "dark" | "light" | "system") => void;
};

export const useStateStore = create<StateStoreType>()((set) => ({
  currentScreen: "encyclopedia",
  setCurrentScreen: (screen: ScreenType) =>
    set((s) => ({ ...s, currentScreen: screen })),

  selectedMushroom: null,
  setSelectedMushroom: (mushroomId: number | null) =>
    set((s) => ({ ...s, selectedMushroom: mushroomId })),

  selectedNewsStory: null,
  setSelectedNewsStory: (newsStoryId: number | null) =>
    set((s) => ({ ...s, selectedNewsStory: newsStoryId })),

  selectedTheme: "system",
  setSelectedTheme: (theme: "dark" | "light" | "system") =>
    set((s) => ({ ...s, selectedTheme: theme })),
}));
