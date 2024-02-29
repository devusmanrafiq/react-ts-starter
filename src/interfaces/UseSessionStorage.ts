export interface SessionStorageInput {
  key: string;
  defaultValue: string;
}

export type SessionStorageOutput = [string, (newValue: string) => void];
