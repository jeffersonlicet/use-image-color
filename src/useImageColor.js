import quantize from 'quantize';
import { useEffect, useState, useCallback } from 'react';

const CHANNELS = 4;
const FORMATS = { rgb: 'rgb', hex: 'hex' };
const DEFAULT_SETTINGS = {
  colors: 5,
  cors: false,
  windowSize: 50,
  format: FORMATS.hex,
};

export default function useImageColor(src, _settings = {}) {
  const settings = { ...DEFAULT_SETTINGS, ..._settings };
  const [colors, setColors] = useState();

  const chunk = useCallback((original, chunkSize = 4) => {
    const data = [];

    for (let i = 0; i < original.length; i += chunkSize * settings.windowSize) {
      data.push(original.slice(i, i + chunkSize));
    }

    return data;
  }, [settings.windowSize]);

  const mapToHex = useCallback(
    (values) => `#${values.map((i) => {
      const h = i.toString('16');
      return h.length < 2 ? `0${h}` : h;
    }).join('')}`,
    [],
  );

  if (!FORMATS[settings.format]) {
    throw new Error('Invalid output format');
  }

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const img = document.createElement('img');

    const context = canvas.getContext('2d');

    if (settings.cors) {
      img.setAttribute('crossOrigin', '');
    }

    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      context.drawImage(img, 0, 0);
      const { data } = context.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
      const colorMap = quantize(chunk(data, CHANNELS), settings.colors);
      const pallete = colorMap.palette();
      setColors(settings.format === FORMATS.rgb ? pallete : pallete.map(mapToHex));
    };

    img.src = src;
  }, [src, settings.cors, settings.colors, settings.format, chunk, mapToHex]);

  return { colors };
}
