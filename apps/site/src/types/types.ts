export interface Page {
  name: string;
  id: string;
  path: string;
  scrollTo: boolean;
}

export interface NavMenu {
  name: string;
  path?: string;
  sublinks?: Page[];
}
