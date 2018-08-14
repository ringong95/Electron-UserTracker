# Electron react  

### A Desktop react app

<br/>

## Install

* **Note: requires a node version >= 7 and an npm version >= 4.**

First, clone the repo via git:

```bash
git clone --depth=1 https://github.com/ringong95/Express-Mongo-Middlegrounds.git your-project-name
```

And then install dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```
**Note**: If you can't use [yarn](https://github.com/yarnpkg/yarn), run `npm install`.

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ npm run dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ npm run start-renderer-dev
$ npm run start-main-dev
```

## What is it?

This is a Electron app that uses React for rendering and Redux as an state manager. Made using the [Electron React boilerplate](https://github.com/chentsulin/electron-react-boilerplate#readme)

## What does it do?

It imports and processes CSV files of a format and then fires off API calls to a REST API to upload that data into a Mongo Database. From there it will reimport it if it fulfills the requirements set and automately add it to our email services mail lists.

## What have i learned?

Learning the difficulties of working with multiple Async actions that require planning to avoid over use of promises and callbacks. I've learned to thin out the data sent in a API call to minimize the strain i am causing with my actions.