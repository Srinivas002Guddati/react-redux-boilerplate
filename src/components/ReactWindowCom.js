import React from 'react';
import { List } from 'react-window';

const items = Array(1000).fill().map((_, i) => `Item ${i}`);

const MyList = () => (
  <List
    height={400}
    itemCount={items.length}
    itemSize={35}
    width={300}
  >
    {({ index, style }) => (
      <div style={style}>{items[index]}</div>
    )}
  </List>
);

export default MyList;