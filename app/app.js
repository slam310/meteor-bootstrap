if (Meteor.isClient) {
  //console.log(Meteor.settings);
}

if (Meteor.isServer) {

  console.log("Meteor settings :");
  console.log(Meteor.settings);

  console.log("");
  console.log("Environment variable :");
  console.log(process.env.MAIL_URL);
}
