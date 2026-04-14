export interface NetworkPost {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}

export interface NetworkProject {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface NetworkGroup {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface NetworkSignal {
  id: string;
  type: string;
  createdAt: string;
}
