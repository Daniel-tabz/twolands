"use client";

import { ReactNode } from "react";

import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { NextUIProvider } from "@nextui-org/react";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">{children}</main>
      </NextUIProvider>
    </WagmiConfig>
  );
}
