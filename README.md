# MF Remote App

**Module Federation Remote** - standalone app that can be loaded by the hub.

Built with **TypeScript** for type safety.

## 🚀 Quick Start

```bash
npm install
npm start
```

Runs on **http://localhost:3001**

## 🎯 Dual Purpose

This app works in two modes:

1. **Standalone**: Visit http://localhost:3001 directly
2. **Federated**: Loaded by the hub at http://localhost:3000

## 🔧 Configuration

See `webpack.config.js`:

```js
exposes: {
  './App': './src/App',
}
```

The `./App` component is exposed and can be imported by any Module Federation host.

## 📦 What It Exposes

- `remoteEntry.js` - The entry point for Module Federation
- `./App` component - Main component that hub can load

## 🌐 CORS

CORS is configured to allow all origins in development:

```js
headers: {
  "Access-Control-Allow-Origin": "*",
}
```

For production, restrict this to your hub's domain:

```js
headers: {
  "Access-Control-Allow-Origin": "https://hub.company.com",
}
```

## 🔐 Authentication

In this basic example, there's no auth. In production:
- Accept `{ session, user }` props from the hub
- Don't implement your own auth (let the hub handle it)
- Share auth state via shared libraries or props
