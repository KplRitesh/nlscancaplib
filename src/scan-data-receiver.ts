import { registerPlugin } from '@capacitor/core';

export interface ScanDataResult { 
  barcode: string;
  rawData?: string; 
}

export interface ScanDataReceiverPlugin { 
  startScanning(): Promise<ScanDataResult>;
  stopScanning(): Promise<void>;
  triggerScan(options: { timeout?: number; scanType?: number }): Promise<void>;

}

const ScanDataReceiver = registerPlugin<ScanDataReceiverPlugin>('ScanDataReceiver', { 
  web: {
    async startScanning(): Promise<ScanDataResult> {
      throw new Error('Barcode scanning is not supported on the web.');
    },
    async stopScanning(): Promise<void> {
      throw new Error('Barcode scanning is not supported on the web.');
    },
    async triggerScan(): Promise<void> {
        throw new Error('Barcode scanning is not supported on the web.');
      }
  },
});

export default ScanDataReceiver; 