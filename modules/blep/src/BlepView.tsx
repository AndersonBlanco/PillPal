import { requireNativeView } from 'expo';
import * as React from 'react';

import { BlepViewProps } from './Blep.types';

const NativeView: React.ComponentType<BlepViewProps> =
  requireNativeView('Blep');

export default function BlepView(props: BlepViewProps) {
  return <NativeView {...props} />;
}
