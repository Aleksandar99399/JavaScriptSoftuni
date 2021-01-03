window.onpopstate=function(event){
    console.log(document.location,event.state);
};

history.pushState({page: 1},'','page-1');
history.pushState({page: 2},'','page-2');
history.pushState({page: 3},'','page-3');