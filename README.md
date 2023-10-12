# YouTube Video Sharing React App
The YouTube Video Sharing Project is a web application developed using React.js and Next.js.
Its primary purpose is to allow users to share YouTube videos, view videos shared by other users, and engage with the shared videos through likes and dislikes.It aims to create a community where users can discover and share interesting video content.

## Prerequisites
Before you begin, ensure you have the following software and tools installed:\
Node.js (v14 or higher)\
npm or yarn package manager\
Git

## Installation & Configuration
Follow these steps to set up the project on your local machine:\
Clone the GitHub repository, run: `git clone https://github.com/hieudt7/youtube-video-sharing.git`

This project have 2 version:\
1.Mock api with **Mock Service Worker** and Websocket branch `developer` was merge into `main`\
2.Mock api using localstorage only and Websocket branch `web-local-storage`\
**Recommend using on branch `developer` with Mock Service Worker is better**

### Run websocket server
To acess into websocket sever project, run: `cd youtube-video-sharing/server`\
When you first clone or upgrade dependencies, run: `npm install`\
Start application in development mode, run: `npm run start`, the default port is at [http://localhost:3002](http://localhost:3002)
### Run client site
To acess into client project, run: `cd youtube-video-sharing/client`\
When you first clone or upgrade dependencies, run: `npm install`\
Start application in development mode, run: `npm run dev`, the default port is at [http://localhost:3000](http://localhost:3000)\
Start application with specific environment, run:  `npm run dev:-[enviroment]`\
Create a build, run: `npm run build`\
Create a specific build, run: `npm run build-[enviroment]`\
Lint code on all files under: **pages**, **components** and **lib**, run: `npm run lint`\
To run the test suite, use: `npm run test`
### Configure the application
Create a **.env.local** file in the project root and set any necessary environment variables.

## Database setup
This project use **Mock Service Worker** to mock api for front-end side and store data in **localstorage**

## Usage
Here's a brief guide on how to use the application:
### User Registration & Authentication:
Register for a new account.\
Log in using your credentials.\
Log out when you're done using the application\
User can login with default account **admin@gmail.com** password **123456**
### Video Sharing
Share YouTube videos by providing their URLs.\
Add video titles and thumbnails.
### Video Viewing
Get real time notification when new videos shared by other users.\
Watch videos using the integrated YouTube player.
### Interaction
Like or dislike videos you watch.\
See the number of views on each video.

## Troubleshooting
In Front-end side are using **Mock Service Worker** to mock api and response, need to improve folow thing:\
JWT for authentication\
Implement infinite scroll for list video\
Implement loading screen when waitng api response\
Itegration youtube api for handle video\
Develop autocomplete for search with debounce or throttle

This project using `Mock Service Worker`, live version work only with localstorage without websocket.
**Please using local for full function. I sincerely apologize for the inconvenience**