# useImageColor
Grab color pallete from any image using this hook

![Example](https://i.imgur.com/LzxKgvl.png)

### Includes Image Component
This image component renders a placeholder color while your original images are loading.

**Before loading big images (color from smaller images)**
![Before loading](https://i.imgur.com/ae6rWmO.png)

**After loading big images:**
![After loading](https://i.imgur.com/6tLtzoP.png)

# Installation:
`npm install use-image-color`

# The hook:
## Usage:
```
import useImageColor from 'use-image-color'

export function Card() {
  const { colors } = useImageColor(url, { cors: true, colors: 5 })
  return (...);
}
```

## Hook params:
```
useImageColor(url: String, options: OptionsObject)
```
| param      | description                                            | default |
|------------|--------------------------------------------------------|---------|
| cors       | Use CORS. Enable this if you are using external images | false   |
| colors     | Number of colors to grab                               | 5       |
| format     | Output format: rgb or hex                              | hex     |
| windowSize | Size of window to grab pixels, low values are faster   | 50      |

# The component:
## Usage:
```
import { Image } from 'use-image-color'

export function Card() {
  return (
    <Image src={url} thumbnail={thumbnail} />
  );
}
```

## Component params:
| param      | description                                            | required |
|------------|--------------------------------------------------------|---------|
| thumbnail  | Small version of your image  | true   |
| src     | Original version of your image | true       |

