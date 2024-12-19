---
nav:
  title: Components
  path: /components
---

# Button

A versatile button component that supports different variants and sizes.

## Examples

### Basic Usage

```tsx
import { Button } from './index.tsx';

export default () => (
  <div className="space-x-4">
    <Button>Default Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="outline">Outline Button</Button>
  </div>
);
```

### Sizes

```tsx
import { Button } from './index.tsx';

export default () => (
  <div className="space-x-4">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);
```

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| variant | The visual style of the button | `'primary' \| 'secondary' \| 'outline'` | `'primary'` |
| size | The size of the button | `'small' \| 'medium' \| 'large'` | `'medium'` |
| className | Additional CSS classes | `string` | - |