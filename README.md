# Animate on scroll

This is a simple script (size 2kb), on pure JS for create any animation from [Animate.css](https://daneden.github.io/animate.css/) on page scroll.

When user will scroll down / up page, selected elements will be showed with custom animation.
Animation will be refreshed and can be played again if user will be back to element (watch example build/index.html).

## How to use

Add next files to your page:
- `animate.css` - you can get it from [Animate.css](https://daneden.github.io/animate.css/)
- `sin-anim.js` - script that do magic
- `style.css` - from this file you need just one class `.sin-anim` (this class will toggle elements view)

Add any animation to your elements by adding class `.sin-anim` and attribute `data-anim` with selected animation as value.
### Add animation example
```sh
<img src="https://picsum.photos/400/?image=1" alt="Image" data-anim="bounce" class="sin-anim">
```

You can watch available list of animations [here](https://github.com/daneden/animate.css).

### `.sin-anim` class description:
```sh
.sin-anim{
    visibility:hidden;
    animation-name:none
}
.sin-anim.animated{
    visibility:visible
}
```
Have fun :)

License
----

MIT
