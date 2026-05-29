# Play Console Data Safety Draft Notes

These are helper notes for Play Console. They are not legal advice and are not linked from the public website.

## Current version assumptions

- HTML game inside Android wrapper.
- Firebase Analytics is implemented.
- Analytics is controlled by a consent screen.
- Custom analytics events are limited to gameplay/balance stats:
  - session duration / session time
  - max level reached
  - prestige number
  - collapse number
  - similar game progression stats
- No account login.
- No user name/email collection inside the app.
- No ads.
- No in-app purchases.
- No cloud saves.
- No precise location.
- No contacts.
- No camera/microphone.
- No chat or user-generated content.

## Likely Data Safety categories to review

Because Firebase Analytics is used, review Google's Firebase Android data disclosure page for the exact SDK version used in the project.

Likely relevant categories may include:

- App activity / analytics events: collected for analytics and app functionality / developer analytics.
- Device or other IDs: Firebase/Analytics app instance identifiers may be used by Firebase Analytics.
- App info and performance / diagnostics: only if your SDK/configuration collects diagnostics or crash/performance data.
- Device information: Firebase SDKs may process technical device/app metadata.

Do not mark categories that the app does not actually collect.

## Sharing

The privacy policy says analytics data is processed by Google Firebase as a service provider. The policy says data is not sold.

## Security practices

Firebase documentation says Firebase encrypts listed collected end-user data in transit using HTTPS. Confirm this remains accurate for the Firebase SDK version used.

## Deletion

The public data deletion page explains:

- User can clear local app data.
- User can uninstall the app.
- User can reset consent by clearing app data/reinstalling until an in-app opt-out exists.
- No account exists, so there is no account deletion flow.

## Update required later

Before adding any of the following, update privacy policy and Play Console Data Safety:

- Ads / AdMob.
- In-app purchases.
- Accounts/login.
- Cloud save.
- Crashlytics.
- Remote Config.
- Messaging/push notifications.
- Analytics linked to advertising.
- Any location, camera, microphone, contacts, or personal profile data.
