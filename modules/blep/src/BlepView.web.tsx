import * as React from 'react';

import { BlepViewProps } from './Blep.types';

export default function BlepView(props: BlepViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
