import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProduct_18034BookLForm from './forms/i-i-s-product-18034-book-l';
import IISProduct_18034PresentationLForm from './forms/i-i-s-product-18034-presentation-l';
import IISProduct_18034BookEForm from './forms/i-i-s-product-18034-book-e';
import IISProduct_18034PresentationEForm from './forms/i-i-s-product-18034-presentation-e';
import IISProduct_18034BookModel from './models/i-i-s-product-18034-book';
import IISProduct_18034PresentationModel from './models/i-i-s-product-18034-presentation';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-product-18034-book': IISProduct_18034BookModel,
    'i-i-s-product-18034-presentation': IISProduct_18034PresentationModel,
  },

  'application-name': 'Книжный клуб заголовок',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Книжный клуб заголовок',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Книжный клуб заголовок',
          title: 'Книжный клуб заголовок',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        'книжный-клуб': {
          caption: 'Книжный клуб',
          title: 'Книжный клуб',
          'i-i-s-product-18034-book-l': {
            caption: 'Book',
            title: '',
          },
          'i-i-s-product-18034-presentation-l': {
            caption: 'Presentation',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-product-18034-book-l': IISProduct_18034BookLForm,
    'i-i-s-product-18034-presentation-l': IISProduct_18034PresentationLForm,
    'i-i-s-product-18034-book-e': IISProduct_18034BookEForm,
    'i-i-s-product-18034-presentation-e': IISProduct_18034PresentationEForm,
  },

});

export default translations;
