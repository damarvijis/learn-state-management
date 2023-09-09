import { createStore, Provider } from "@/lib";

export const storeLib = createStore({
  counter: 0,
  name: ""
})

export type ProviderLibPropsType = {
  children: React.ReactNode;
};

export const ProviderLib = ({ children }: ProviderLibPropsType) => <Provider store={storeLib}>{children}</Provider>