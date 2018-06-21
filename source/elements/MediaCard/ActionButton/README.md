---
layout: library
components:
  ActionButton: '@elements/ActionButton/ActionButton'
---

# Action Button

Represents a button used for clicking or linking!

Prop | Type | Options
--- | --- | ---
href | String | —
variant | Enum | __primary__, cta, passive

```vue
<ActionButton>Primary</ActionButton>
<ActionButton variant="cta">Call-to-action</ActionButton>
<ActionButton variant="passive">Passive</ActionButton>
```

## Linked Button

```vue
<ActionButton href="http://www.zombo.com/">Goto Zombo</ActionButton>
```

## Action Button with interaction

```vue
<ActionButton @click="console.log">Log an Event!</ActionButton>
```
