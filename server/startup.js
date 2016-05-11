Meteor.startup(function () {
	if(!Meteor.users.find().count()) {
		var user = {
			username: 'admin',
			password: 'admin'
		};
		Accounts.createUser(user);
	}
});
