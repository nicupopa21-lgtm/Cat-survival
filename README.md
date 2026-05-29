# Cat Survival GitHub Pages files

Repository: https://github.com/nicupopa21-lgtm/Cat-survival

Live site: https://nicupopa21-lgtm.github.io/Cat-survival/

Static support/privacy website for `Cat Survival`.

## Files included

- `index.html` — homepage linking all public pages
- `privacy.html` — privacy policy for the current Android version
- `contact.html` — bug report/contact page using `mailto:`
- `support.html` — support and troubleshooting
- `data-deletion.html` — data deletion and analytics consent reset instructions
- `terms.html` — simple terms page
- `404.html` — GitHub Pages 404 page
- `assets/css/styles.css` — styling
- `assets/js/site.js` — contact email and site URL config
- `PLAY_CONSOLE_DATA_SAFETY_DRAFT.md` — private helper notes for Play Console, not linked from the website

## Final check before publishing

1. Re-read `privacy.html` and make sure it exactly matches the APK/AAB you upload.
2. If the Play Store title changes later, replace `Cat Survival` everywhere.
3. If the GitHub Pages URL changes later, update `assets/js/site.js`, `robots.txt`, and `sitemap.xml`.

## GitHub Pages setup

1. Create a new public GitHub repository, for example `Cat-survival`.
2. Upload all files from this folder into the repository root.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. After GitHub Pages publishes, use the public `privacy.html` URL in Play Console.

Example privacy policy URL format:

```text
https://nicupopa21-lgtm.github.io/Cat-survival/privacy.html
```

## Main menu / in-game links

Use these URLs in the Android game after GitHub Pages is live:

```text
Privacy Policy: https://nicupopa21-lgtm.github.io/Cat-survival/privacy.html
Report a bug:   https://nicupopa21-lgtm.github.io/Cat-survival/contact.html
Support:        https://nicupopa21-lgtm.github.io/Cat-survival/support.html
Data deletion:  https://nicupopa21-lgtm.github.io/Cat-survival/data-deletion.html
```

## Current assumptions used

This documentation assumes the current version has:

- HTML game running inside an Android Java/Kotlin wrapper.
- Firebase Analytics implemented and working.
- Custom analytics intended only for gameplay/balance stats such as session time, max level, prestige number, and collapse number.
- Consent screen already implemented.
- No ads.
- No in-app purchases.
- No accounts/login.
- No cloud save.
- No camera, microphone, contacts, precise location, or chat.
- The full settings/options menu and analytics opt-out toggle are still planned, not yet released.

Update the privacy policy before releasing any version that changes those assumptions.
