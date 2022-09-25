import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') first_name;
  @attr('string') last_name;
  @attr('string') email;
}
