# Prism-Palette

Prism is a voice-controlled generative AI art wall. It's designed to be projected or displayed on a screen in a home or office.

It's open source, and you can install it for yourself using the instructions below.

https://github.com/benrugg/Prism-Palette/assets/1221274/ff21a88c-e93d-4435-a2fb-6c1c222743ca

## Installation

Heads up! These instructions require a decent amount of technical know-how.

Most of the web services used are free, but you will need to pay for Stability AI to generate images, and you may incur a tiny billing amount (< $1) with Google Firebase.

1. Create a Firebase project. (Go to https://firebase.google.com/, sign up and create a new project. You can call it `Prism` or whatever you'd like).

2. Add the following services to your project:

- Firestore Database (`Cloud Firestore`, not `Realtime Database`) (optionally enable analytics)
- Functions
- App Check
- Storage

3. In the new Firestore Database, create a new collection called `sites`, then choose a name for your "site" and add a document with that name as the id, and with one key/value: `createdAt` = now.

4. Configure App Check: Enforce it on `Storage` and `Cloud Firestore`. (It will also be enforced on Functions automatically later).

5. Sign up for a Stability AI account at https://beta.dreamstudio.ai/ and get an API key on the Account page.

6. Add your Stability API Key to Google Cloud Secrets (Go to https://cloud.google.com/security/products/secret-manager and create a new secret with the name `STABILITY_API_KEY` in the Firebase project you just created).

7. Optionally sign up for a Pico Voice account and get an `access key` (https://picovoice.ai/).

8. Fork this repo and then install Prism locally (clone your new repo on your machine).

9. Put all of your Firebase info and other API keys in the appropriate places in `.env`. Leave the variables ending in `_EMULATOR` as false. The next group are all Firebase related. `VITE_PRISM_SITE_ID` is the name of the site you chose in step 3 above. `VITE_PICO_VOICE_ACCESS_KEY` is the access key from Pico Voice.

10. Commit the changes in `.env`.

11. Install the Firebase CLI tool (`npm install -g firebase-tools`).

12. Run `npm run deploy-rules` to add the Firestore Database rules to your new project.

13. Run `npm run deploy-functions` to deploy the Firebase Functions to yor new project.

14. Deploy the front-end web interface on a service like Vercel. (On Vercel, create a new project and link it to your newly forked repo, and it should take care of everything else).

15. Go to your newly deploy site and you should see it all working!

## Local Development

For local development, you'll need to follow all of the steps above (at least through 13). Here is additional info:

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Local .env variables

Add a `.env.local` file in the root directory, and you can override any variables from `.env`.

In order to use App Check locally, you will need to add a debug token. Follow the instructions in `/src/db/firebase.js`.

You can also run Firebase emulators for any of the services. Start the emulators (`npm run emulators`) and change the `XXX_EMULATOR` variables to `true` in `.env.local`.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
