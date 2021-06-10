import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      title: 'Toys R Us',
      imageSource: 'https://media1.popsugar-assets.com/files/thumbor/fP1ssP2FBASLssl67umKKTQWPOU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/03/12/635/n/24155406/tmp_Mg4ylG_0cae29c5d0e422dd_7259691694_fb6b9b4ed0_o.jpg',
      startDate: 'November 2008',
      endDate: 'January 2009',
      startingPay: '$8/hour',
      endingPay: '$8/hour',
      location: 'Fort Collins, CO',
      career: 'Retail Sales'
    };
    // let response = await fetch('/api/rentals.json');
    // let parsed = await response.json();
    // return parsed;
  }
}
