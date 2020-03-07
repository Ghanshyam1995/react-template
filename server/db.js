const MongoClient = require("mongodb").MongoClient;
const dbConnectionUrl = "mongodb+srv://mydbuser:1UqT8u2PEgyuHJi8@cluster0-h6vrb.mongodb.net/test?retryWrites=true&w=majority";

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function (err, dbInstance) {
        if (err) {
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbCollection = dbInstance.db(dbName).collection(dbCollectionName);
            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};