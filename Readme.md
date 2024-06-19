## Getting Started

1. First, install dependencies:

```bash
npm install
```

2. Start Expo:

```bash
npm start
```

3. Run dev server (API) in another terminal:

```bash
npx json-server ./db/db.json
```

4. Update API_URL in `./src/utils/constants.ts` to match Expo IP address from step 2 above

## Device testing on android:

Install the expo app on your android device and scan QR Code displayed from step 2 above.

## Emulator testing on android:

1. First make sure you have installed [android studio](https://developer.android.com/studio) and atleast one [emulator](https://developer.android.com/studio/run/managing-avds).

2. Press `a` after step 2 to start the emulator
