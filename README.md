# gatsby-plugin-vwo-smartcode

Plugin to inject [VWO](https://vwo.com) SmartCode into the document head of your Gatsby website. This is required when creating a deployment to link your website with VWO.

---

## Install

```sh
npm install gatsby-plugin-vwo-smartcode
```

## How to use

Just add the plugin to the plugins array in your gatsby-config.js

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

---

_Inspired by the [outdated VWO gatsby plugin by ynnoj](https://github.com/ynnoj/gatsby-plugin-vwo)._
