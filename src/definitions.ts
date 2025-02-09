export interface ScanDataReceiverPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
