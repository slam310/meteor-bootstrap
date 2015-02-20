Samples = new Mongo.Collection('samples');
/*************************************************************/
/*  Queries */
/*************************************************************/
Samples.findAll = function(){
  return Samples.find();
}

Samples.findRecent = function(){
  return Samples.find({/*some criteria here*/});
}
/*************************************************************/
/*  Methods */
/*************************************************************/
Meteor.methods({
  'samples-custom': function(){
    if(this.isClient){
      // execute on client
    }else{
      // execute on server
    }
  },
  'samples-customTwo': function(){
    if(this.isClient){
      // execute on client
    }else{
      // execute on server
    }
  }
});
