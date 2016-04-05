/**
 * Created by 46988172t on 10/03/16.
 */

app.factory("tweetMessages", ["$firebaseArray",
    function($firebaseArray) {
        var ref = new Firebase("https://ecaibtweet.firebaseio.com/tweets");
        return $firebaseArray(ref);
    }
]);

app.factory("Users", ["$firebaseArray",
    function($firebaseArray){
        var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
        return $firebaseArray(ref);
    }
]);

app.factory("tweetsMessagesUser", ["$firebaseArray",
    function($firebaseArray) {
        return function (username){

            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            var usuari = ref.child(username).child('tweets');
            return $firebaseArray(usuari);
        }
    }
]);


app.factory("AddUsers",["$firebaseObject",
    function($firebaseObject){
        return function (username){
            // create a reference to the database location where we will store our data
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            var usuari = ref.child(username);
            // this uses AngularFire to create the synchronized array
            return $firebaseObject(usuari);
        }
    }
]);

/*

 app.factory("getUser", ["$firebaseObject",
 function($firebaseObject) {
 return function(userName) {
 var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");

 return {nom: $firebaseObject(ref.child(usuari).child("name")),
 desc: $firebaseObject(ref.child(usuari).child("description"))};
 };
 }
 ]);

 app.factory("getUserTweets", ["$firebaseArray",
 function($firebaseArray) {
 return function(userName) {
 var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
 return $firebaseArray(ref.child(usuari).child("tweets"));
 };
 }
 ]);

 app.factory("getFollow", ["$firebaseArray",
 function($firebaseArray) {
 return function(userName) {
 var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
 return $firebaseArray(ref.child(usuari).child("following"));
 };
 }
 ]);

 app.factory("getFollowTweets", ["$firebaseArray",
 function($firebaseArray) {
 return function(userName) {
 var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
 return $firebaseArray(ref.child(usuari).child("following"));
 };
 }
 ]);

 */