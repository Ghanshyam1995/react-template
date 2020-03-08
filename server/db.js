const MongoClient = require("mongodb").MongoClient;
const configs = require('./configs');
function initialize(
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(configs.CONNECTION_STRING, function (err, dbInstance) {
        if (err) {
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbCollection = dbInstance.db(configs.DB_NAME).collection(dbCollectionName);
            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};