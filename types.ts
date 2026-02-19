
export type SlideType = 'Title' | 'Section Divider' | 'Content' | 'Diagram' | 'Demo' | 'Exercise' | 'Quote' | 'Comparison' | 'Timeline' | 'Recap';

export interface Slide {
  number: number;
  title: string;
  type: SlideType;
  visualDescription: string;
  bullets: string[];
  speakerNotes: string;
}

export interface AgendaItem {
  time: string;
  session: string;
  duration: string;
  format: string;
  description: string;
}

export interface WorkshopData {
  title: string;
  subtitle: string;
  trainer: string;
  duration: string;
  audience: string;
  goal: string;
  agenda: AgendaItem[];
  slides: Slide[];
}
