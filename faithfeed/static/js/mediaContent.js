new Vue({
    el: 'mediaCollection',
    loading: true,
    error: null,
    message: "loading videos",

    mediaContent: new MediaContent(),

    searchList,
    videoList,

    videos: videoContent.items,
    
    mounted: function () {
        media = this.mediaContent.getCollection();
    },
    
})

const videoList = {
    kind: "",
    etag: "",
    nextPageToken: "",
    prevPageToken: "",
    pageInfo: {
        totalREsults: "",
        resultPerPage: "",
    },
    items:[{
        id: "",
        snippet: {
            title: "",
            tags: [],
            publishedAt: "",
            description: "",
            categoryId: "",
            thumbnails: {
                key: {
                    url: "",
                    width: "",
                    height: ""
                }
            }
        },
        player: {
            embedHtml:"",
            embedHeight: "",
            embedWidth: ""
        }
    }]
}
const searchList = {
    id: {
        kind: "",
        videoId: "",
        channelId: "",
        playlist: "",
    },
    snippet: {
        publishedAt: "",
        channelId: "",
        title: "",
        desciption: "",
        thumbnails: {
            key: {
                url: "",
                width: "",
                height: ""
            }
        }
    },
    channelTitle: "",
    liveBroadcastContent: ""
}

//video component
Vue.component('videoContent', {
    template: `<template>
    <div class="card-image"><img v-bind:src="video.thumbnail.key.url"/></div>
    <div class="card-text">
    <span>{{video.title}}</span> <span>{{video.publishedAt}}</span>
    <p>{{video.description}}</p>
    </div>
    </template>`,

    props: {video:Object},

})//end of component

//video modal component
Vue.component('videoModal', {
    props: {video: Object},
    template: `<div class="modal" id="video-modal">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <!--header-->
                            <div class="modal-header">
                                <h4 class="modal-title">
                                    My modal
                                </h4>
                                <button type="button" class="close" data-dismiss="modal">&CircleTimes;</button>
                            </div>
                            <!--body-->
                            <div class="modal-body">
                                <iframe v-bind:width="" v-bind:height="" v-bind:src="youtube.com/embed/video.id">
                                </iframe>
                            </div>
                            <!--modal footer-->
                            <div class="modal-footer">

                            </div>
                        </div>
                    </div>
                </div>`
})

//music component
Vue.component('musicContent', {
    template: `<template>
    <div class="card-image"><img v-bind:src="music.thumbnail.key.url"/></div>
    <div class="card-text">
    <span>{{music.title}}</span> <span><i class="fas fa-time"></i>{{music.publishedAt}}</span>
    <p>{{music.description}}</p>
    </div>
    </template>`,

    props: {music:Object},

})

//book component
Vue.component('bookContent', {
    template: `<template>
    <div class="card-image"><img v-bind:src="book.thumbnail.key.url"/></div>
    <div class="card-text">
    <span>{{book.title}}</span> <span><i class="fas fa-time"></i>{{book.publishedAt}}</span>
    <p>{{book.description}}</p>
    </div>
    </template>`,

    props: {book:Object},

})

//all media component
Vue.component('mediaContent', {
    template: `<template>
    <div class="card-image"><img v-bind:src="media.thumbnail.key.url"/></div>
    <div class="card-text">
    <span>{{media.title}}</span> <span>{{media.publishedAt}}</span>
    <p>{{media.description}}</p>
    </div>
    </template>`,

    props: {media:Object},

})