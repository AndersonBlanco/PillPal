import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './Blep.types';

type BlepModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class BlepModule extends NativeModule<BlepModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(BlepModule);
