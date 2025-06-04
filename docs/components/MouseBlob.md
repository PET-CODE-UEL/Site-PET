# MouseBlob Component

A dynamic mouse follower component that creates an interactive blob effect on the cursor.

## Usage

```tsx
import { MouseBlob } from "../components/MouseBlob";

function MyComponent() {
  return (
    <div>
      <MouseBlob color="#000" />
      {/* Your content */}
    </div>
  );
}
```

## Props

| Prop    | Type     | Default  | Description                 |
| ------- | -------- | -------- | --------------------------- |
| `color` | `string` | `'#000'` | The color of the mouse blob |

## Features

- Smooth cursor following using requestAnimationFrame
- Mix-blend-difference effect for visual contrast
- Optimized performance using CSS transforms
- Zero dependencies

## Implementation Details

The MouseBlob component uses React's useEffect hook to track mouse movement and update the blob position. It creates a fixed-position div that follows the cursor with smooth animation.

## Example

```tsx
// Custom colored blob
<MouseBlob color="rgba(0, 0, 255, 0.5)" />
```
