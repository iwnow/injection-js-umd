## UMD bundle compiled from typescript libraries injection-js and @abraham/reflection


```
npm i injection-js-umd
```

and add locally to the page

```html
<script src="node_modules/dist/injection-js.umd.js"><script>
```

or from CDN

```html
<script src="https://cdn.jsdelivr.net/npm/injection-js-umd@2.3.1/dist/injection-js.umd.js"><script>
```

```js
const { ReflectiveInjector }  = window['injection-js'];
```

### Compiled from dependencies
- [injection-js (by Minko Gechev)](https://github.com/mgechev/injection-js) (Dependency injection library for JavaScript and TypeScript)
- [@abraham/reflection (by Abraham Williams)](https://github.com/abraham/reflection) (Lightweight (3K) ES Module implementation of reflect-metadata)