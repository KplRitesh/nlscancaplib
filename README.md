# nlscancaplib

Angular Capacitor Plugin for Newland scanner device

## Install

```bash
npm install nlscancaplib
npx cap sync
```

## API

<docgen-index>

* [`registerScanner()`](#registerscanner)
* [`stopScanning()`](#stopscanning)
* [`triggerScan(...)`](#triggerscan)
* [`addListener('scanDataReceived', ...)`](#addlistenerscandatareceived-)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### registerScanner()

```typescript
registerScanner() => Promise<void>
```

--------------------


### stopScanning()

```typescript
stopScanning() => Promise<void>
```

--------------------


### triggerScan(...)

```typescript
triggerScan(options: { timeout?: number; scanType?: number; }) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ timeout?: number; scanType?: number; }</code> |

--------------------


### addListener('scanDataReceived', ...)

```typescript
addListener(eventName: 'scanDataReceived', listenerFunc: (result: { data: string; }) => void) => PluginListenerHandle
```

| Param              | Type                                                |
| ------------------ | --------------------------------------------------- |
| **`eventName`**    | <code>'scanDataReceived'</code>                     |
| **`listenerFunc`** | <code>(result: { data: string; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
