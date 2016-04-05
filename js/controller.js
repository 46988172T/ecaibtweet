/**
 * Created by leosss on 10/03/16.
 */
app.controller("controlador", ["$scope", "tweetMessages", "Users", "tweetsMessagesUser","AddUsers",
    function($scope, tweetMessages, Users, tweetsMessagesUser,AddUsers) {

        $scope.prelogin = "";
        $scope.logged = "hidden";
        $scope.conn = "";
        $scope.messages = tweetMessages;
        $scope.usuaris = Users;


        $scope.messagesUser = tweetsMessagesUser('Leo');


        $scope.login = function(username){
            for(var i = 0; i < $scope.usuaris.length; i++){
                var aux = $scope.usuaris[i];
                if( aux.$id == username){
                    $scope.prelogin = "hidden";
                    $scope.logged = "";
                    $scope.conn = username;
                    $scope.id(username);
                }
            }
        };

        $scope.addMessage = function() {
            for(var i = 0; i < $scope.usuaris.length; i++){
                var aux = $scope.usuaris[i];
                if( aux.$id == $scope.user){
                    $scope.messages.$add({
                        user: aux.name,
                        text: $scope.message
                    });
                    $scope.messagesPersonal.$add({
                        text: $scope.message
                    });
                    $scope.message = "";

                }
            }
        };

        $scope.id = function(username){
            $scope.messagesUser = tweetsMessagesUser(username);
        };

        $scope.addUser = function() {
            $scope.users.$save();
        };

        $scope.userid = function(username){
            $scope.users = AddUsers(username);
        };

        /*$scope.addMessage = function() {

         $scope.messages.$add({
         user: $scope.user,
         text: $scope.message
         });

         $scope.message = "";
         };

        $scope.addMessage = function() {
            $scope.user.$add({
                text: $scope.message});
            $scope.message = "";
        };*/
    }
]);