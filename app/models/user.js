import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') authenticationToken;
  @attr('string') email;
  @attr('boolean') emailVerified;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') verificationCode;
}
