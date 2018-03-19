---
MediaCard: './MediaCard.vue'
---

# Media Card

Represents a card that can contain media like images or videos

## Basic Card

```vue
<MediaCard title="Voluptate incididunt occaecat">
  <slot name="media"><img src="" alt="" /></slot>
  <p>Officia excepteur sit proident nulla occaecat anim id culpa non ut ipsum sint ipsum labore.</p>
</MediaCard>
```

## Linked Card without media

```vue
<MediaCard title="Incididunt occaecat voluptate" href="#">
  <p>Anim id culpa non ut ipsum sint ipsum labore Officia excepteur sit proident nulla occaecat.</p>
</MediaCard>
```

### Card with Video

```vue
<MediaCard title="Voluptate incididunt occaecat">
  <slot name="media">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hwHUKRvPYeY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </slot>
  <p>Officia excepteur sit proident nulla occaecat anim id culpa non ut ipsum sint ipsum labore.</p>
</MediaCard>
```
