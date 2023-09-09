import { ContextLearnProvider } from "@/stores/context";
import { ReduxProvider } from "@/stores/redux";
import { UnstatedCounter, UnstatedForm } from "@/stores/unstated";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ProviderLib } from "@/stores/my-lib";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Learn State Management</title>
        <meta name="description" content="Learn State Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextLearnProvider>
        <ProviderLib>
          <RecoilRoot>
            <UnstatedCounter.Provider>
              <UnstatedForm.Provider>
                <ReduxProvider>
                  <Component {...pageProps} />
                </ReduxProvider>
              </UnstatedForm.Provider>
            </UnstatedCounter.Provider>
          </RecoilRoot>
        </ProviderLib>
      </ContextLearnProvider>
    </>
  );
}

/*
zustand & jotai ga pake provider?
*/