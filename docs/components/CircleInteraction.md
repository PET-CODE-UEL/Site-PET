# CircleInteraction Component

An interactive circle component that responds to mouse proximity with scaling effects.

## Usage

```tsx
import { CircleInteraction } from "../components/CircleInteraction";

function MyComponent() {
  return <CircleInteraction color="rgba(19, 93, 159, 1)" title="Computação" />;
}
```

## Props

| Prop        | Type     | Required | Description                    |
| ----------- | -------- | -------- | ------------------------------ |
| `color`     | `string` | Yes      | Background color of the circle |
| `title`     | `string` | Yes      | Text displayed below circle    |
| `className` | `string` | No       | Additional CSS classes         |

## Features

- Mouse proximity detection
- Smooth scaling animation
- Responsive design
- Customizable appearance

## Implementation Details

The component uses mouse position tracking to calculate distance from the circle's center. When the mouse is within the specified range (200px by default), the circle scales up proportionally to the proximity.

## Example

```tsx
<CircleInteraction
  color="rgba(237, 112, 31, 1)"
  title="Design"
  className="custom-circle"
/>
```
