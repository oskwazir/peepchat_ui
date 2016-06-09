import Ember from 'ember';

const { Component, computed } = Ember;

export default Ember.Component.extend({
    classNames: ['input-field'],
    text: 'text',
    _errorMessages: computed('errors.[]', function() {
        return (this.get('errors') || []).join(', ');
    })
});
