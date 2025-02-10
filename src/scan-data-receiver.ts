import { registerPlugin} from '@capacitor/core';
import type { PluginListenerHandle } from '@capacitor/core';

export interface ScanDataReceiverPlugin { 
  registerScanner(): Promise<void>; 
  stopScanning(): Promise<void>;
  triggerScan(options: { timeout?: number; scanType?: number }): Promise<void>;
  addListener(eventName: 'scanDataReceived', listenerFunc: (result: { data: string }) => void): PluginListenerHandle;

}

const ScanDataReceiver = registerPlugin<ScanDataReceiverPlugin>('ScanDataReceiver', {
  web: {
    async registerScanner(): Promise<void> {
      throw new Error('Barcode scanning is not supported on the web.');
    },
    async stopScanning(): Promise<void> {
      throw new Error('Barcode scanning is not supported on the web.');
    },
    async triggerScan(): Promise<void> {
      throw new Error('Barcode scanning is not supported on the web.');
    },
    async addListener(): Promise<PluginListenerHandle> {
        throw new Error("Listeners are not supported on the web")
    }
  },
});


export default ScanDataReceiver; 
export * from './scan-data-receiver'