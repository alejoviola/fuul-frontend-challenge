# Fuul Frontend Challenge

## Prepare the project

### Fuul-SDK

1- First you have to install the SDK dependences:

```bash
  cd fuul-sdk
  yarn install
```

2- Then, compile the TS:

```bash
  yarn build
```

### Fuul-web

3- When you have compiled the SDK, you can install dependences in the web project:

```bash
  cd fuul-web
  yarn install
```

4- Having all dependences installed you can run the project:

```bash
  yarn dev
```

5- Go to `http://localhost:3000/` in your browser

## Add the package to another project

If you want to create a new project to install the dependence on it, you can add it in the root of the project using this command:

```bash
  yarn add file:../fuul-sdk
```

## Usage

The Fuul SDK allows you to initialize your project with an API key and display a referral modal on your React website. This SDK is designed to be easily integrated and used with minimal setup.

#### Importing the SDK

```javascript
import Fuul from "fuul-sdk";
```

#### Initializing the SDK

To initialize the SDK, call the init method with your API key:

```javascript
Fuul.init("your-api-key-here");
```

#### Showing the Referral Modal

After initializing the SDK, you can show the referral modal by calling the showReferralModal method with the referrer's address:

```javascript
Fuul.showReferralModal("referrer-address-here");
```

### Adding styles

You should add the css styles for the components using this route in the index of your web app:

```javascript
import "fuul-sdk/styles/fuul-styles.css";
```

## Example

```javascript
import Fuul from "fuul-sdk";
import "fuul-sdk/styles/fuul-styles.css";

// Initialize the SDK with your API key
Fuul.init("your-api-key-here");

// Show the referral modal
Fuul.showReferralModal("referrer-address-here");
```

## Challenge features

#### Fuul-SDK

- Simulate SDK init with API Key
- Referral Modal

#### Fuul-web

- Wallet connection
- Wallet store
- Sign message
- Uses SDK
- Pedro Pedro Pedro Pedro Pe tribute

## Web Stack

- Typescript
- Nextjs
- Ethers.js
- Zustand
- Tailwind
- Material UI

#

Thanks!
