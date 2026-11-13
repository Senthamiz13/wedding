# Wedding invitation

A responsive, bilingual Tamil and English wedding invitation website for a celebration in Puducherry on 17–18 March 2027. It is built with plain HTML, CSS, and JavaScript, so it needs no build step or package installation and can be hosted directly with GitHub Pages.

## Project structure

```text
.
├── index.html              # Page content and semantic markup
├── assets/
│   ├── css/
│   │   └── styles.css      # Layout, typography, responsive styles, and motion
│   ├── fonts/
│   │   └── tamil/          # Local Bamini Tamil font files
│   ├── images/
│   │   ├── hero/           # Hero and banner imagery
│   │   └── details/        # Gallery, venue, and decorative imagery
│   └── js/
│       ├── main.js         # Language switching and countdown
│       ├── bamini-converter.js # Unicode Tamil to Bamini display conversion
│       └── LICENSE-bamini-converter.txt # License for the conversion mapping
└── README.md
```

## Features

- Tamil is the default language, with an English language switch.
- The selected language is saved in the browser's local storage.
- Tamil is the default language. Bamini 70 styles the title and Bamini 71 styles invitation messages; supporting labels use normal Tamil font fallbacks. A local converter prepares Unicode Tamil text for the legacy Bamini font encoding. English mode uses English serif and sans-serif fonts.
- A live countdown targets 18 March 2027 at 9:00 AM Indian Standard Time.
- Event details and Google Maps/Waze directions are included.
- Responsive layout, keyboard focus styles, and reduced-motion support.

Tamil fonts are served locally from `assets/fonts/tamil/`, so they do not require an external font service.

## Preview locally

Open `index.html` in a browser, or serve the project directory with any static file server. There are no dependencies to install and no compile step.

## Publish with GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the site (for example, `main`) and the `/(root)` folder, then save.
5. Wait for the Pages deployment to finish. GitHub will show the published site URL in the Pages settings.

Keep `index.html` at the repository root for this configuration. Relative asset paths allow the same files to work both in a project site (under `/<repository>/`) and a user or organization site.

## Updating the invitation

- Edit the event text in `index.html` and its matching Tamil and English entries in `assets/js/main.js` (`translations`).
- Update the countdown target in `assets/js/main.js` (`weddingTime`) using an ISO date/time with an explicit timezone offset.
- Update the venue links and address in `index.html`.
- Replace or add local font files in `assets/fonts/` and update their `@font-face` declarations in `assets/css/styles.css`.
- Change page title, description, or theme color in the `<head>` of `index.html`.

Check both language options and a narrow mobile viewport after changing content or styles.
