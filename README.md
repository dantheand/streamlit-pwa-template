# Streamlit Progressive Web App Template

This template allows you to turn your Streamlit Cloud application into a Progressive Web App (PWA). 

PWAs allow your users to install the app on their mobile devices providing a native-app-like experience. Since Streamlit Cloud-hosted apps require a constant internet connection, I also added an indicator for if the app is offline. 

## Demo

https://github.com/user-attachments/assets/c4e86b7a-19f5-4b22-80b8-96513e412820


## Prerequisites

*   **Streamlit Cloud App**: Deploy your Streamlit app on [Streamlit Cloud](https://streamlit.io/cloud) and get the iframe embed URL.

## Configuration

To use this template, create a new repository using this one as a template. Then follow the configuration instructions below.
<p align="center">
   <img width="537" height="219" alt="image" src="https://github.com/user-attachments/assets/e8350925-6067-488b-bf31-95ddfe2de051" />
</p>

### Add Your Icon

Replace the existing `icon.png` file in the root directory with your own application icon.

*   **Filename**: `icon.png`
*   **Recommendation**: Use a square PNG image, at least 512x512 pixels. This will be used for your app icon and the favicon.

### Modify `config.js`

Update the configuration object to match your application details.

*   **iframeUrl**: Change this to the URL of your deployed Streamlit app.
    *    Append `?embed=true&show_footer=false` to your Streamlit URL to remove the Streamlit Cloud header and footer.
*   **appName**: The full name of your application.
*   **appShortName**: A shorter version of the name.

```javascript
// Example config.js
const CONFIG = {
    // ...
    appName: "My Awesome App",
    appShortName: "MyApp",
    iframeUrl: "https://doc-hello.streamlit.app/?embed=true", 
    // ...
};
```

### Modify `manifest.json`

Open `manifest.json` and ensure the metadata matches what you put in `config.js`. This file is used by the browser to install your app.

*   **name**: Should match `appName` from `config.js`.
*   **short_name**: Should match `appShortName` from `config.js`.

## Deploy

Once configured, you can deploy this site to any static hosting provider such as GitHub Pages, AWS Amplify, or Netlify.

## Usage as a mobile app

1.  Navigate to your deployed URL on a mobile device or desktop.
2.  **iOS (Safari)**: Tap the "Share" button -> "Add to Home Screen".
3.  **Android (Chrome)**: Tap the menu (three dots) -> "Install App" or "Add to Home Screen".
