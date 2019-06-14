import { Vue } from "../vue";
import { mediaCont } from "../component/basicComponents";
import { videoCont } from "../component/basicComponents";
import { bookCont } from "../component/basicComponents";
import { musicCont } from "../component/basicComponents";
import { mediaComponent } from "./mediaComponent";

Vue.Component('sidebarComponent', {
    data: {
       media: mediaComponent.data.mediaTypes['']
    },
    template: `<div class="card-header"><h4>mediaType.message</h4></div>
    <div class="card-body" id="mediaType.id">
        <mediaContent v-for="media in allMedia" v-bind:media="media" v-bind:key="media.id"></mediaContent>
    </div>`,

    props: {mediaType: Object},
    component: {
        'mediaContent': mediaCont,
        'videoContent': videoCont,
        'bookContent': bookCont,
        'musicContent': musicCont
    }
})
