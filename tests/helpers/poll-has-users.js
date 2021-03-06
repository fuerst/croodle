import Ember from 'ember';

const helpers = function() {
  Ember.Test.registerHelper('pollHasUser', function(app, assert, name, selections) {
    let elBase;
    find('.user').each((index, el) => {
      if (find('td:nth-child(1)', el).text().trim() === name) {
        elBase = el;
      }
    });
    assert.ok(elBase, `user ${name} exists`);

    if (elBase) {
      selections.forEach((selection, index) => {
        assert.equal(
          find(`td:nth-child(${index + 2})`, elBase).text().trim(),
          selection,
          `selection ${index} is as expected`
        );
      });
    }
  });

  Ember.Test.registerHelper('pollHasUsersCount', function(app, assert, count, message) {
    if (Ember.isEmpty(message)) {
      message = 'poll has expected count of users';
    }
    assert.equal(
      find('.user').length,
      count,
      message
    );
  });
};

export default helpers();
