import React from 'react';

import useImageColor, { Image } from 'use-image-color';

const divStyle = { float: 'left' };

function App() {
  const url = 'https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80';
  const thumbnail = 'https://images.unsplash.com/photo-1553344518-c44926bebaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80';

  const { colors } = useImageColor(url, { colors: 5, cors: true, format: 'hex' });

  if (colors) {
    console.log(colors);
  }
  return (
    <div className="card">
      <div style={{ width: 300, height: 'auto' }}>
        <Image
          style={{boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'}}
          src={url}
          thumbnail={thumbnail}
        />
        {colors && <h2>{colors[0]}</h2>}
        {colors &&  colors.map(color =>
          <div key={color} style={{width: 40, height: 40, background: color, ...divStyle }} /> )}
      </div>
    </div>
  );
}

export default App;
