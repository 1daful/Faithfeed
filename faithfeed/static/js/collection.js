let collection = {
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
        'media-collection-tab-pane': mcdpane,
        'book-collection-tab-pane': bcdpane,
        'music-collection-tab-pane': mccdpane,
        'video-collection-tab-pane': vcdpane,

    }
}