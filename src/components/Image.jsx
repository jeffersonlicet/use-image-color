import React from 'react';
import useImageColor from '../useImageColor';

const wrapperDiv = {
  width: '100%',
  position: 'relative',
};

const bg = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
  position: 'relative',
};

export default function ImageComponent({
  src,
  style,
  thumbnail,
  wrapperStyle,
  wrapperClassName,
  ...props
}) {
  const { colors } = useImageColor(thumbnail, { cors: true });
  return (
    <div className={wrapperClassName} style={{ ...wrapperDiv, ...wrapperStyle }}>
      { colors && <div style={{ ...bg, backgroundColor: colors[0] }} /> }
      { <img style={{ ...imageStyle, ...style }} src={src} {...props} /> }
    </div>
  );
}
