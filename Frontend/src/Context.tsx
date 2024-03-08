import { createContext, useState } from 'react';
import { StateType } from './types';

type ContextType = {
  state: StateType,
  setState: React.Dispatch<React.SetStateAction<StateType>>
}

const initialState: StateType = {
  menuOpen: true,
  toast: { text: "", success: undefined },
  theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light',
  user: { username: "test-user", email: "test-user@test.com", avatar: "" },
  messages: [],
}

export const Context = createContext<ContextType>({
  state: initialState,
  setState: () => {} 
}) as React.Context<ContextType>;

export const MyProvider = (props: any) => {
  const [state, setState] = useState<StateType>(initialState);
  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  );
};
