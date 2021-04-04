# Simple PostCard Editor Application using React JS.

Simple post card editor application created with React. This provide some photo editing tools. You can add photos, text-boxes to editable area. Also possible to rotate, zoom-in, zoom-out, group, un-group, and save(download) final image as well.

## Development Plan

- High level identification of components with data flow (1.5 hrs)
- Initial project setup with create-react-app and identification of folder structure. Setup tailwind CSS to the project. (0.5 hrs)
- Setup fabric js for editable canvas layout with right side action panel
  with flex layout. (1 hrs)
- Implementation of open(load) a image to editable area. (1 hrs)
- Implementation of delete a added object from editable area (1 hrs)
- Implementation of add text box to editable area with font customizations (font family change, font color, and font size) (3.5 hrs)
- Implementation of zoom-in and zoom-out of the canvas(editable area) including mouse wheel support. (2 hrs)
- Implementation of rotate object on canvas in 90 deg one time. (1 hrs)
- Implementation of group and ungroup objects in canvas (1.5 hrs)
- Implementation of undo and redo changes done on the canvas (0.5 hrs)
- Implementation of save(download) final edited image with format selection(But supports only png format yet) (2 hrs)
- Added unit tests for UI components using react-testing-library and jest-dom.

#### Questions had:

- How big that I am going to offer the editable area?
- Was it auto adjustable to editing image?
- What is the reason bellow multiple image thumbnail with multiple image previews?
- According to that are we going to support multiple images editable once with switchable capability?

## Components Architecture

![Alt text](PostCardEditorArchitecture.png?raw=true 'PostCard Editor Components Diagram')

## Tests

Test are written in react-testing-library and jest-dom. You can run test via command

### `npm test`

## How to run the project locally

You can run this project using single command

### `npm start`

## How to build the project

You can build the project via the following command before deploy anywhere.

### `npm run build`

## Suggestions and Improvements

- Delete object in canvas supports by keyboard delete key.
- Much smoothy zoom-in and zoom-out support.
- More font styles and sizes support with some bug fixes related to font change.
- Better undo redo support in every change done to canvas objects.
- Add some more test cases to improve code coverage.

## Technologies Used

- React JS
- Fabric JS
- Fabric React
- Fabric History
- Tailwind CSS
- Post CSS
- Autoprefixer
- React Testing Library
- Jest DOM

## Live demo of the application

Checkout the live demo of the application via this link

### [PostCard Editor](https://postcard-editor.netlify.app)

### Preview

![Alt text](PostCardEditorPreview.png?raw=true 'PostCard Editor Components Diagram')
