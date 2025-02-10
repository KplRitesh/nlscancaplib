import { registerPlugin } from '@capacitor/core';

import type { ScanDataReceiverPlugin } from './scan-data-receiver'; 

const ScanDataReceiver = registerPlugin<ScanDataReceiverPlugin>('ScanDataReceiver', {
  web: () => import('./web').then((m) => new m.ScanDataReceiverWeb()),
});

export { ScanDataReceiverPlugin };
export default ScanDataReceiver;