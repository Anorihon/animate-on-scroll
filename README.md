# Animate on scroll

This is a simple script (size 2kb), on pure JS for create any animation from [Animate.css](https://daneden.github.io/animate.css/) on page scroll.

When user will scroll down / up page, selected elements will be showed with custom animation.
Animation will be refreshed and can be played again if user will be back to element (watch example build/index.html).

## How to use

### Step #1
Add next files to your page:
- `animate.css` - you can get it from [Animate.css](https://daneden.github.io/animate.css/)
- `sin-anim.js` - script that do magic

### Step #2
Add next style:
```css
[data-anim]{
    visibility:hidden;
    animation-name:none
}
[data-anim].animated{
    visibility:visible
}
```
### Step #3

Add any animation to your elements by adding attribute `data-anim` with selected animation from [here](https://github.com/daneden/animate.css) as value.
Example:
```html
<img src="https://picsum.photos/400/?image=1" alt="Image" data-anim="bounce">
```

Have fun :)

License
----

MIT
