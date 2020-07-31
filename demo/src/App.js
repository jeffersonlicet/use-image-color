import React from 'react';

import useImageColor, { Image } from 'use-image-color';

function App() {
  const url = 'https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80';
  const thumbnail = 'https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80';

  const { colors } = useImageColor(url, { colors: 5, cors: true, format: 'hex' });
  if (colors) {
    console.log(colors);
  }
  return (
    <div className="card">
      <div style={{ width: 300, height: 'auto' }}>
        <Image src={url} thumbnail={thumbnail} />
        <h2>hola mundo</h2>
      </div>
    </div>
  );
}

export default App;
