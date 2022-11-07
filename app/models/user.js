import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') authentication_token;
  @attr('string') email;
  @attr('boolean') email_verified;
  @attr('string') first_name;
  @attr('string') last_name;
}
