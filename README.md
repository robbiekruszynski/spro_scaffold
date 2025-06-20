# 🏗 Scaffold-ETH 2 with Espresso Integration

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a> |
  <a href="https://docs.espressosys.com">Espresso Documentation</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain with Espresso Systems integration. This boilerplate demonstrates how to integrate Espresso's sequencer API into your dApp.

⚙️ Built using NextJS, RainbowKit, Foundry/Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.
- 🌟 **Espresso Integration**: Example integration with Espresso Systems' sequencer API.

## Espresso Integration Features

This boilerplate includes:

- Smart contract integration with Espresso's sequencer API
- Frontend components for submitting transactions to Espresso
- Example implementation of transaction processing
- Integration with Espresso's block processing system

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2 and Espresso integration, follow the steps below:

1. Install the latest version of Scaffold-ETH 2

```
npx create-eth@latest
```

This command will install all the necessary packages and dependencies, so it might take a while.

2. Run a local network in the first terminal:

```
yarn chain
```

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with the Espresso integration using the `/espresso` route.

## Espresso Integration Usage

1. Navigate to `/espresso` in your browser
2. Connect your wallet
3. Enter a transaction payload
4. Submit the transaction to Espresso's sequencer
5. Monitor the transaction status

## What's next

Visit the [What's next section of our docs](https://docs.scaffoldeth.io/quick-start/environment#whats-next) to learn how to:

- Edit your smart contracts
- Edit your deployment scripts
- Customize your frontend
- Edit the app config
- Writing and running tests
- [Setting up external services and API keys](https://docs.scaffoldeth.io/deploying/deploy-smart-contracts#configuration-of-third-party-services-for-production-grade-apps)

## Espresso Resources

- [Espresso Documentation](https://docs.espressosys.com)
- [Espresso API Reference](https://docs.espressosys.com/network/api-reference/sequencer-api)
- [Espresso GitHub](https://github.com/EspressoSystems)

