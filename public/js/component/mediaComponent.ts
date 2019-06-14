export let mediaComponent = {
    data: {
        filter: '',
        loading: true,
        error: null,
        message: "loading videos",
        recentMedia: null,
        relatedMedia: null,
        seriesMedia: null,
        allMedia: null,

        mediaTypes: [
            {
                id: 'recentMedia',
                message: 'Recent Media',
                media: this.recentMedia
            },
            {
                id: 'relatedMedia',
                message: 'Related to this topic',
                media: this.relatedMedia
            },
            {
                id: 'seriesMedia',
                message: 'In this series',
                media: this.seriesMedia
            },
            {
                id: 'allMedia',
                message: 'All media contents',
                media: this.allMedia
            }
        ]
    },

    template: `
    <div class="card">
        <p v-if="loading">{{message}}</p>
        <template v-else>
            <h3 v-if="error">{{media.error.message}}</h3>
            <template v-else>
                <mediaContent v-for="media in mediaContent" v-bind:media="media" v-bind:key="media.id">
                </mediaContent>
            </template>
        </template>
    </div>`,

    recentMedia: this.mediaContent.getAll(this.max),
    seriesMedia: this.mediaContent.getSeries(this.max),
    relatedMedia: this.mediaContent.getRelated(postTags, this.max),
    popularMedia: this.mediaContent.getPopular(this.max)
}