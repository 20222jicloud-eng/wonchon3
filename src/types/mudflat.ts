export interface CreatureInfo {
  id: string;
  name: string;
  category: '갑각류' | '어류' | '연체동물' | '조류' | '환형동물' | '식물';
  emoji: string;
  imageUrl: string; // Real photograph from verified scientific/public archives
  imageAlt?: string;
  oneLiner: string;
  description: string;
  funFact: string;
}

export interface MudflatInfo {
  id: string;
  name: string;
  badge: string;
  region: string;
  locationDescription: string;
  coordinates: { x: number; y: number }; // Pixel coordinates on the 524x631 South Korea SVG map
  areaSummary: string;
  type: '펄갯벌' | '모래갯벌' | '혼합갯벌' | '복합갯벌';
  unescoStatus: boolean;
  unescoYear?: number;
  designation?: string;
  features: string[];
  keyCreatures: CreatureInfo[];
  story: {
    title: string;
    subtitle: string;
    content: string[];
    moralOrTip: string;
  };
  observationKeyPoints: string[]; // Content for students to write in their physical science workbook (실험관찰)
  recommendedActivities: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'ox' | 'multiple';
  options: string[];
  correctIndex: number;
  explanation: string;
  hint: string;
}
