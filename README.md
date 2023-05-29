
# Interview Scheduler

A React app that allows new appointments between students and mentors to be booked, edited, and cancelled.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Setup the scheduler-api server

1. Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) into a new directory (NOT within the current scheduler directory) on your host machine (not in the Vagrant machine).

2. Follow the Setup instructions

3. Start the server `npm start`

4. Send a GET request to reset the DB: `curl http://localhost:8001/api/debug/reset`

## Dependencies
Axios
Classnames
React
Prop-Types
SASS
Jest
Storybook

## Screenshots
![](https://github.com/clorislee1222/scheduler/blob/master/docs/appointments.PNG)
![](https://github.com/clorislee1222/scheduler/blob/master/docs/appointment-form.PNG)
