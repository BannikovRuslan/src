import { Serializer as PresentationSerializer } from
  '../mixins/regenerated/serializers/i-i-s-product-18034-presentation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PresentationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
