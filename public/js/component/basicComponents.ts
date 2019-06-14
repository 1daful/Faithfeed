//video component
export let videoCont = {
    template: `<template>
    <div class="card-image"><img v-bind:src="video.thumbnail"/></div>
    <div class="card-text">
    <span>{{video.title}}</span> <span><i class"fas fa-time"</i>{{video.dateTime}}</span>
    <p>{{video.description}}</p>
    </div>
    </template>`,

    props: {video:Object},

}//end of video component

//video modal component
export let videoModal = {
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
}

//music component
export let musicCont = {
    template: `<template>
    <div class="card-image"><img v-bind:src="music.thumbnail.key.url"/></div>
    <div class="card-text">
    <span>{{music.title}}</span> <span><i class="fas fa-time"></i>{{music.dateTime}}</span>
    <p>{{music.description}}</p>
    </div>
    </template>`,

    props: {music:Object},

}

//book component
export let bookCont= {
    template: `<template>
    <div class="card-image"><img v-bind:src="book.thumbnail"/></div>
    <div class="card-text">
    <span>{{book.title}}</span> <span><i class="fas fa-time"></i>{{book.dateTime}}</span>
    <p>{{book.description}}</p>
    </div>
    </template>`,

    props: {book:Object},

}

//all media component
export let mediaCont = {
    template: `<template v-if="loaded">
    <div class="card-image"><img v-bind:src="media.thumbnail"/></div>
    <div class="card-text">
    <span>{{media.title}}</span> <span><i class="fas fa-clock"><i>{{media.dateTime}}</span>
    <p>{{media.description}}</p>
    </div>
    </template>`,

    props: {media:Object},

}

//quote component
export let quoteCont = {
    template: `<template>
    <div class="card-image"><img v-bind:src="quote.thumbnail"/></div>
    <div class="card-text">
    <p>{{quote.content}}</p>
    </div>
    </template>`,

    props: {quote:Object},

}