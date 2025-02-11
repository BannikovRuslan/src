export default {
  projections: {
    MyPresentation: {
      date: {
        __caption__: ''
      },
      book: {
        __caption__: '',
        author: {
          __caption__: ''
        },
        pages: {
          __caption__: ''
        },
        title: {
          __caption__: ''
        }
      }
    },
    PresentationE: {
      date: {
        __caption__: 'Date'
      },
      book: {
        __caption__: 'Book',
        title: {
          __caption__: 'Title'
        }
      }
    },
    PresentationL: {
      date: {
        __caption__: 'Дата'
      },
      book: {
        __caption__: 'Книга',
        title: {
          __caption__: 'Книга'
        },
        author: {
          __caption__: 'Автор'
        }
      }
    }
  },
  validations: {
    date: {
      __caption__: 'date'
    },
    book: {
      __caption__: 'book'
    }
  }
};
