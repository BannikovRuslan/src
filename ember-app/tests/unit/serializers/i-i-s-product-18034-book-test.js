import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-product-18034-book', 'Unit | Serializer | i-i-s-product-18034-book', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-product-18034-book',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-product-18034-book',
    'model:i-i-s-product-18034-presentation',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
