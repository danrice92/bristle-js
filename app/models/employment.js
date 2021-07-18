import Model, { attr } from '@ember-data/model';

export default class EmploymentModel extends Model {
  @attr('string') job_title;
  @attr('string') employer_name;
  @attr('date') start_date;
  @attr('date') end_date;
  @attr('number') starting_pay;
  @attr('number') ending_pay;
  @attr location;
  @attr('string') career_title;
}
