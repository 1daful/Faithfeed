import { mctpane } from "./media-collection-tab-pane";
import { mcctpane } from "./music-collection-tab-pane";
import { bctpane } from "./book-collection-tab-pane";
import { vctpane } from "./video-collection-tab-pane";
import { c_n_item } from "./collection-nav-item";
export let collection = {
    template: `<div class="pill">
        <ul class="nav nav-pill flex-column flex-sm-row">
            <collection-nav-item></collection-nav-item>
        </ul>
        <div class="pill-content">
            <media-collection-tab-pane></media-collection-tab-pane>
            <book-collection-tab-pane></book-collection-tab-pane>
            <music-collection-tab-pane></music-collection-tab-pane>
            <video-collection-tab-pane></video-collection-tab-pane>
        </div>
    </div>`,
    components: {
        'media-collection-tab-pane': mctpane,
        'book-collection-tab-pane': bctpane,
        'music-collection-tab-pane': mcctpane,
        'video-collection-tab-pane': vctpane,
        'collection-nav-item': c_n_item

    }
}