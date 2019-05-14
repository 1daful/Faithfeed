new Vue({
    el:'#profile',
    data:{},
})

//profile-content
Vue.component('profile-content', {
    template: `<div class="card-body" id="profile-header">
    <h3 class="card-title">
        {{user.name}}
    </h3>
    <img class="card-img" v-bind:src="user.pic"/>
    <profile-content></profile-content>
</div>

<div class="tab">
    <ul class="nav nav-tabs">
        <li class="nav-item active">
            <a class="nav-link" data-toggle="tab" href="#info">Info</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" data-toggle="tab" href="#collection">Collection</a>
        </li>
    </ul>
    <div class="tab-content">
        <div id="info" class="tab-pane fade in active">
            <user-info></user-info>
        </div>
        <div id="collection" class="tab-pane fade">
            <collection></collection>
        </div>
    </div>
</div>`,
components: {
    'user-info': userInfo,
    'collection': collection
}
})//end profile-content