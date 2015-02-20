
SamplesIndexController = RouteController.extend({
  template: 'ForTest',
  samples: function () {
    return Samples.find();;
  }
});
