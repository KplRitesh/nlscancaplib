import { registerPlugin } from '@capacitor/core';

export interface ScanDataResult { // Better name for the interface
  barcode: string;
  rawData?: string; // Base64 encoded raw data
}

export interface ScanDataReceiverPlugin { // Plugin interface name
  startScanning(): Promise<ScanDataResult>;
  stopScanning(): Promise<void>;
  triggerScan(options: { timeout?: number; scanType?: number }): Promise<void>;
  // ... (Other methods)
}

const ScanDataReceiver = registerPlugin<ScanDataReceiverPlugin>('ScanDataReceiver', { // Match plugin name here!
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

export default ScanDataReceiver; // Export with the correct name