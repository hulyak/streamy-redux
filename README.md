# Streamy Streaming App with React-Redux

## Features: 

- Users can authenticate themselves with Google 2.0
- User can login and log out.
- Forms are handled with Redux-Form
- Every user can create unlimited channels / streams that they can stream to.
- App has functionality to direct users to appropriate urls with the use of react-router-dom
- Users create, edit, delete a stream (CRUD operations) 
- Json-server saves the stream data
- React-Portal shows Delete Stream Modal 
- Node Media Server creates a RTMP and OBS video player

## Requiremnets: 

- Node should be installed.
- [OBS- Open Broadcaster Software](https://obsproject.com/) should be installed on your local machine to be able to make video streams.

## How To Run :

```
// install dependencies
npm install
// cd into project and start the client app
npm start 

// start the json-server
cd server
npm start

// start rtmp server
cd rtmpserver
npm start

```
