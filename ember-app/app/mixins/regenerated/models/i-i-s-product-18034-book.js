import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  author: DS.attr('string'),
  pages: DS.attr('number'),
  title: DS.attr('string')
});

export let ValidationRules = {
  author: {
    descriptionKey: 'models.i-i-s-product-18034-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pages: {
    descriptionKey: 'models.i-i-s-product-18034-book.validations.pages.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  title: {
    descriptionKey: 'models.i-i-s-product-18034-book.validations.title.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-product-18034-book', {
    title: attr('', { index: 0 }),
    author: attr('', { index: 1 }),
    pages: attr('', { index: 2 })
  });

  modelClass.defineProjection('BookL', 'i-i-s-product-18034-book', {
    title: attr('Название', { index: 0 }),
    author: attr('Автор', { index: 1 })
  });
};
