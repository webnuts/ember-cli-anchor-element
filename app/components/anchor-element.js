import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  scrollTo: undefined,
  href: '',
  attributeBindings: ['href'],
  offsetFromTop: 0,

  didInsertElement: function() {
    var self = this;
    var element = this.$();
    element.on('click', function() {
      $('html, body').animate({
        scrollTop: $(self.get('scrollTo')).offset().top - self.get('offsetFromTop')
      }, 'slow');
      return false;
    });
  },

  willClearRender: function() {
    var element = this.$();
    element.off('click', '**');
  }
});