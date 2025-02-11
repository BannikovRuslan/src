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
    'i-i-s-product-18034-presentation': IISProduct_18034PresentationModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'книжный-клуб': {
          caption: 'книжный-клуб',
          title: 'книжный-клуб',
          'i-i-s-product-18034-book-l': {
            caption: 'i-i-s-product-18034-book-l',
            title: 'i-i-s-product-18034-book-l'
          },
          'i-i-s-product-18034-presentation-l': {
            caption: 'i-i-s-product-18034-presentation-l',
            title: 'i-i-s-product-18034-presentation-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-product-18034-book-l': IISProduct_18034BookLForm,
    'i-i-s-product-18034-presentation-l': IISProduct_18034PresentationLForm,
    'i-i-s-product-18034-book-e': IISProduct_18034BookEForm,
    'i-i-s-product-18034-presentation-e': IISProduct_18034PresentationEForm
  },

});

export default translations;
