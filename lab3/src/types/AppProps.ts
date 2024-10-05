// src/types/AppProps.ts
export interface AppProps {
  items: { id: number; title: string }[];
  removeItem: (id: number) => void;
  addItem: (title: string) => void; // Accepts title as an argument
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
