import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Книжный клуб заголовок',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Книжный клуб заголовок',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Книжный клуб заголовок',
          title: 'Книжный клуб описание'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'книжный-клуб': {
          caption: 'Книжный клуб',
          title: 'Книжный клуб',
          'i-i-s-product-18034-book-l': {
            caption: 'Book',
            title: ''
          },
          'i-i-s-product-18034-presentation-l': {
            caption: 'Presentation',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-product-18034-book-l': IISProduct_18034BookLForm,
    'i-i-s-product-18034-presentation-l': IISProduct_18034PresentationLForm,
    'i-i-s-product-18034-book-e': IISProduct_18034BookEForm,
    'i-i-s-product-18034-presentation-e': IISProduct_18034PresentationEForm
  },

});

export default translations;
