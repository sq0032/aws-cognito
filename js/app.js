import 'aws-sdk/dist/aws-sdk';
import './aws-cognito.min';
const AWS = window.AWS;

//var AWS = require('aws-sdk/dist/aws-sdk');
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:d8e6ce93-9af3-4b2a-ac8a-65a8c804ff75',
});

var syncManager = new AWS.CognitoSyncManager();
syncManager.openOrCreateDataset('myGame', function(err, dataset) {
   // ...
  dataset.get('myKey', function(err, value) {
    console.log('myRecord: ' + value);
  });

  dataset.put('newKey', 'newValue', function(err, record) {
    console.log(record);
  });

//  dataset.remove('oldKey', function(err, record) {
//    console.log(record);
//  });
  
  dataset.synchronize();  
});


console.log('Hello');