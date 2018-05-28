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
           this.fetchLaunches('https://api.spacexdata.com/v2/launches?&launch_year=2018');
         });
  }

  // fetchLaunches(value){
  //   this.listState.isLoading = true;
  //   this.listState.rocketNameFilter = () => {
  //     let filter = `?rocket_name=${this.listState.rocketNameFilter}`;
  //     if(this.listState.rocketNameFilter === undefined) filter = ``;
  //     fetch(`https://api.spacexdata.com/v2/launches/all${filter}`)
  //       .then(response => response.json())
  //       .then(data =>{
  //         this.listState({ launches: data , isLoading: false, isEmpty: false});
  //         if(data.length === 0 ) this.listState({ isEmpty: true});
  //       } )
  //       .catch(error =>( this.listState({ error: true})));
  //
  //   };
  // }

  fetchLaunches(endpoint, value = '') {
        this.listState.isLoading = true;
        fetch(`${endpoint}${value}`)
          .then((res) => {
              if (res.status >= 400) {
                  this.this.listState.error = true;
                }
              return res.json();
            })
          .then(data => this.listState.launches = data)
          .then(() => this.listState.isLoading = false)
          .then(() => this.listState.error = undefined)
          .catch(() => this.listState.error = 'There was an issue with fetching data');
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

  // @action
  // handleFilterChange(value) {
  //     this.fetchLaunches(value);
  //   }
}


const instance = new MainStore();

export default instance;
