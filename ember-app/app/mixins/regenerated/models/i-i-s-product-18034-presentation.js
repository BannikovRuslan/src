import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  book: DS.belongsTo('i-i-s-product-18034-book', { inverse: null, async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-product-18034-presentation.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-product-18034-presentation.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MyPresentation', 'i-i-s-product-18034-presentation', {
    date: attr('', { index: 0 }),
    book: belongsTo('i-i-s-product-18034-book', '', {
      author: attr('', { index: 1 }),
      pages: attr('', { index: 2 }),
      title: attr('', { index: 3 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('PresentationE', 'i-i-s-product-18034-presentation', {
    date: attr('Date', { index: 0 }),
    book: belongsTo('i-i-s-product-18034-book', 'Book', {
      title: attr('Title', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'title' })
  });

  modelClass.defineProjection('PresentationL', 'i-i-s-product-18034-presentation', {
    date: attr('Дата', { index: 0 }),
    book: belongsTo('i-i-s-product-18034-book', 'Книга', {
      title: attr('Книга', { index: 1 }),
      author: attr('Автор', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
