import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.книжный-клуб.caption'),
          title: i18n.t('forms.application.sitemap.книжный-клуб.title'),
          children: [{
            link: 'i-i-s-product-18034-book-l',
            caption: i18n.t('forms.application.sitemap.книжный-клуб.i-i-s-product-18034-book-l.caption'),
            title: i18n.t('forms.application.sitemap.книжный-клуб.i-i-s-product-18034-book-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-product-18034-presentation-l',
            caption: i18n.t('forms.application.sitemap.книжный-клуб.i-i-s-product-18034-presentation-l.caption'),
            title: i18n.t('forms.application.sitemap.книжный-клуб.i-i-s-product-18034-presentation-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})