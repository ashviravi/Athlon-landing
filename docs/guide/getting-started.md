---
nav:
  title: Guide
  order: 1
---

# Getting Started

Welcome to Modern Docs! This guide will help you get started with our component library.

## Installation

```bash
npm install modern-docs
```

## Basic Usage

```tsx
import { Button } from 'modern-docs';

function App() {
  return (
    <Button variant="primary">
      Click me!
    </Button>
  );
}
```

## Configuration

You can customize the theme by creating a `theme.config.js` file:

```js
module.exports = {
  theme: {
    primary: '#4F46E5',
    secondary: '#7C3AED',
  },
};
```