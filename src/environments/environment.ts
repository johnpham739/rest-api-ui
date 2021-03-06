// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

// This hits the application endpoints of my deployed app
const hostname = window.location.hostname;
export const hostURL = `http://${hostname}`;

export const awsUrl = `http://api-env.eba-udukpxjr.us-east-2.elasticbeanstalk.com/api/`

// What if I wanted to grab the current host of my server
export const currentOrigin = window.location.origin // localhost or aws server

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
