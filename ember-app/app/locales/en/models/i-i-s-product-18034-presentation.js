export default {
  projections: {
    MyPresentation: {
      date: {
        __caption__: 'date'
      },
      book: {
        __caption__: 'book',
        author: {
          __caption__: 'author'
        },
        pages: {
          __caption__: 'pages'
        },
        title: {
          __caption__: 'title'
        }
      }
    },
    PresentationE: {
      date: {
        __caption__: 'date'
      },
      book: {
        __caption__: 'book',
        title: {
          __caption__: 'title'
        }
      }
    },
    PresentationL: {
      date: {
        __caption__: 'date'
      },
      book: {
        __caption__: 'book',
        title: {
          __caption__: 'title'
        },
        author: {
          __caption__: 'author'
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
