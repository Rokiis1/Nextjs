export interface FormData {
  id: string;
  title: string;
  content: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface Props {
  notes: Note[];
}
