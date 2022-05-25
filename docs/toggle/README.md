---
title: Toggle
---

# Toggle Component

<toggle-1 />

## Details

The `Toggle` component allows users to **Switch** some boolean value on/off.

## Example

```html
<toggle v-model="isOpen" />
```

```html
<toggle
  v-model="toggleChecked4"
  class="mx-10"
  :color="'#46B781'"
  :offColor="'transperent'"
  :sliderColor="'white'"
  :sliderOffColor="'#46B781'"
  :borderColor="'#46B781'"
  :showBorder="true"
/>
```

### Props

| Prop    | Type      | Default   |
| ------- | --------- | --------- |
| `value` | _Boolean_ | **false** |
