# be-annoyed

A website engineered to be as annoying as humanly possible.

> Every single design decision was made in bad faith.
> You have been warned.

## Features

- Random screen invert/blur/zoom effects
- 7% of keypresses silently eaten (Tab and F5 are spared. you're welcome.)
- Font chaos: Comic Sans, Impact, and friends, randomly, mid-sentence
- Fake progress bar that asymptotically approaches 100% and will never arrive
- Cookie banner with multiple lives
- Popup windows that multiply and say things like "This is not a virus. Probably."
- Confetti on every click (unsolicited)
- Randomly draggable elements that stay wherever you drop them
- Fake system notifications ("Download complete!" nothing downloaded)
- Scroll jacking with a cooldown, because even chaos needs rate limiting
- Tab key sends focus somewhere random
- The page misses you when you switch tabs
- Secret easter egg input in the corner. figure it out.

## Demo

Live demo at <https://nellowtcs.github.io/be-annoyed/>

## Running locally

```bash
cd Build
npm install
npm run dev
```

## Building

```bash
npm run build          # github pages / browser build
npm run build:single   # standalone single .html file (Be-Annoyed.html)
```

## Tech

- Vanilla JS, modular (vite)
- ESLint + Prettier
- PWA support
- Single-file build mode via `vite-plugin-singlefile`

## License

[MIT](LICENSE)
