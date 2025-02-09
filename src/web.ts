import { WebPlugin } from '@capacitor/core';

import type { ScanDataReceiverPlugin } from './definitions';

export class ScanDataReceiverWeb extends WebPlugin implements ScanDataReceiverPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
