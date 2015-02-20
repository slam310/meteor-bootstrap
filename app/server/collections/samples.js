/*************************************************************/
/*  Samples security  */
/*************************************************************/
Samples.allow({
  insert: function() {
    return true
  },
  update: function() {
    return true
  },
  remove: function() {
    return true
  }
})

Samples.deny({});
/*************************************************************/
/*  Sample Publish Function */
/*************************************************************/
Meteor.publish('samples-all', function() {
  return Samples.findAll();
});

Meteor.publish('samples-recent', function() {
  return Samples.findRecent();
});
