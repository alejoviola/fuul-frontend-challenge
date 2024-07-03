# Fuul Frontend Code Challenge

Fuul provides an SDK for clients to implement on their React websites.

With the idea to increase the number of active referrers, when a user performs a certain action on the app, a modal is shown encouraging the user to refer others and earn commissions.

## Objective

The task is to build an SDK and a website that uses it, where users connect their wallet, perform an action and are then shown the modal.

The objective of the modal is to encourage users to refer others. So it should include all necessary information and tools to convince users to share, including their personalized tracking link.

## Deliverables

The code should:

- Be written in Typescript
- Be structured using all best-practices you know
- Be easy to evolve and add new functionality

### SDK package

A stand-alone package that can be imported in any React project (for the purposes of this challenge there is no need to host it anywhere).

It should include:

- An export named `Fuul` which exposes 2 methods: `init` and `showReferralModal`
- The `init` method takes an `apiKey` that identifies the `project` and calls a mocked API to get the project information from Fuul. Feel free to include the information that you think is relevant to show to the user in the modal. Assume that projects are able to define this data on the Fuul app modal editor.
- The SDK should be as easy to setup on the client app as possible

The modal should include:

- A tracking link identifying the user. Something like `{hostedURL}/?referrer={connectedAddress}` (using the hosted URL from your site and the address that is connected)
- The project information obtained from the mocked API call
- If possible, try to use standard html and/or plain javascript for the modal component

### Website

The website will import the SDK package locally (`npm install ./sdk` or whatever directory you decide to put it in)

It should include:

- A "connect wallet" button (you can use any type of wallet or provider)
- A "perform action" button (let's call it mint, trade, deposit, or any onchain action that you want). This button should prompt the user to sign a message using their wallet and then trigger the referral modal
