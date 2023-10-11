# gatsby-plugin-vwo-smartcode

Plugin to inject [VWO](https://vwo.com) SmartCode to your Gatsby website. 

## Install

```sh
npm install gatsby-plugin-vwo-smartcode
```

## How to use in Gatsby

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-vwo-smartcode`,
    options: {
      vwoAccountId: '<--VWO AccountId Here-->',
    },
  },
],
```