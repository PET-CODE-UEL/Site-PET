# Acoes Page

The Acoes (Actions) page showcases different areas of expertise with interactive circular elements and a dynamic mouse blob effect.

## Components Used

- `MouseBlob`: Creates the interactive cursor effect
- `CircleInteraction`: Displays the interactive circular sections
- Custom CSS styles for layout and animations

## Layout Structure

```
Acoes Page
├── Navigation Bar
│   ├── Logo
│   └── Menu Items
└── Main Content
    ├── Computação Circle
    ├── Design Circle
    └── Ciência de Dados Circle
```

## Features

- Interactive mouse blob that follows cursor
- Circles that respond to mouse proximity
- Responsive design for mobile and desktop
- Custom font integration (Cascadia Code)

## Styling

The page uses a combination of Tailwind CSS classes and custom CSS for:

- Responsive layouts
- Interactive animations
- Typography
- Spacing and positioning

## Example Usage

```tsx
import Acoes from "./pages/Acoes";

function App() {
  return <Acoes />;
}
```

## Responsive Behavior

- Desktop: Three columns with interactive circles
- Mobile: Single column layout with stacked circles
- Breakpoint: 991px
