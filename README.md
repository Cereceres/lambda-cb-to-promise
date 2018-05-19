# lambda-cb-to-promise
support to promises in aws lambda
# Usage

```js
const promiseHandler = require('lambda-cb-to-promise')
const awsHanlder = (eventFromAws, ctxFromAws, cbToCheckIfPromiseIsReturned) => {
 // lambda function is here
 // you can return a promise
 return Promise.resolve({})
 // or you can call the callback
 cbToCheckIfPromiseIsReturned('error', null)
}
const handlerToAwsLambda = promiseHandler(awsHanlder)
```

# API promiseHandler(awsHandler) -> handlerWithPromiseSupport
