import {observable, action, autorun} from 'mobx';


class MainStore {
  @observable currentViewName = '';  // 'list' / 'details'

  @observable listState = {

    rocketNameFilter: '',
    launches: [], // fetched data
    isLoading: false,
    error: false,
    isEmpty: false,
    
  };

  constructor() {
    this.disposeAutorun = autorun(() => {
           this.fetchData('https://api.spacexdata.com/v2/launches?&launch_year=2018');
         });
  }

  fetchData(value){
    this.listState.isLoading = true;
    this.listState({ rocketNameFilter: value }, () => {
      let filter = `?rocket_name=${this.listState.rocketNameFilter}`;
      if(this.listState.rocketNameFilter === undefined) filter = ``;
      fetch(`https://api.spacexdata.com/v2/launches/all${filter}`)
        .then(response => response.json())
        .then(data =>{
          this.listState({ launches: data , isLoading: false, isEmpty: false});
          if(data.length === 0 ) this.listState({ isEmpty: true});
        } )
        .catch(error =>( this.listState({ error: true})));

    });
  }


  @action
  switchView(viewName){
    switch (viewName) {
            case 'details':
              return this.currentViewName = 'details';
            case 'list':
              return this.currentViewName = 'list';
            default:
              return null;
          }
  }

  @action
  setFilter(value){
    this.fetchLaunches('https://api.spacexdata.com/v2/launches?&launch_year=2018&rocket_id=', value);
  }
}


const instance = new MainStore();

export default instance;
