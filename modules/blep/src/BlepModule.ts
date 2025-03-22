import { NativeModule, requireNativeModule } from 'expo';

import { BlepModuleEvents } from './Blep.types';

declare class BlepModule extends NativeModule<BlepModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<BlepModule>('Blep');
