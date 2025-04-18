// Define the structure for documentation entries
export interface DocEntry {
  title: string;
  url: string;
  description: string;
  keywords: string[];
  category: string;
  score?: number; // Optional score property for search results
}
