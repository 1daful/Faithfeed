export let c_n_item = {
    template: `<li class="nav-item">
    <a class="flex-sm-fill text-sm-center nav-link" v-bind:href="media.url" data-toggle="pill">
        {{media.name}}
    </a>
</li>`,
props: {media: Object}
}