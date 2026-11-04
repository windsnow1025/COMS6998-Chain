import * as React from 'react';

// The base path of the week's route the page is under, for the links a view builds
export const BaseContext = React.createContext<string>('');

export function useBase(): string {
  return React.useContext(BaseContext);
}
