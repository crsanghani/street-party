Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile || {};

    user.profile.firstName = options.firstName;
    user.profile.lastName = options.lastName;

    user.profile.profPicture = Meteor.absoluteUrl() + "img/default/user.jpg";
    user.profile.address = ["Address"];
    user.profile.phone = ["Phone number"];
    user.profile.socialMedia = ["Social media url"];
    user.roles = ["User"];

    return user;
});