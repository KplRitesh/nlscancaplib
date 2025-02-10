/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';

import type { ScanDataReceiverPlugin } from './scan-data-receiver';

export class ScanDataReceiverWeb extends WebPlugin implements ScanDataReceiverPlugin {
  constructor() {
    super();
  }

  async registerScanner(): Promise<void> {
    throw new Error('Barcode scanning is not supported on the web.');
  }
  async stopScanning(): Promise<void> {
    throw new Error('Barcode scanning is not supported on the web.');
  }
  async triggerScan(): Promise<void> {
    throw new Error('Barcode scanning is not supported on the web.');
  }
  addListener(_eventName: 'scanDataReceived', _listenerFunc: (result: { data: string }) => void): any {
    throw new Error('Listeners are not supported on the web.');
  }

}

const ScanDataReceiver = new ScanDataReceiverWeb();

export { ScanDataReceiver };