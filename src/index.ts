import { registerPlugin } from '@capacitor/core';

import type { ScanDataReceiverPlugin } from './definitions';

const ScanDataReceiver = registerPlugin<ScanDataReceiverPlugin>('ScanDataReceiver', {
  web: () => import('./web').then((m) => new m.ScanDataReceiverWeb()),
});

export * from './definitions';
export { ScanDataReceiver };
