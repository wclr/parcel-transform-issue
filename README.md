Run `yarn install`
Run `yarn build` and the the error

```
× Build failed.

@parcel/core: Failed to resolve 'f43313d21d3fd8e2:942108d5638fe308' from './src/app.ts'

  ...\parcel-transform-issue\src\app.ts:1:8
  > 1 |
  >   | ^
    2 |
    3 | export const walletSrc = new URL("./asset.svg", import.meta.url)

@parcel/resolver-default: Unknown url scheme or pipeline 'f43313d21d3fd8e2:'
```c