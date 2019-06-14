export let vctpane = {
    template: `<div id="media.name" class="tab-pane fade in active">
    <videoContent v-for="mediaContent in mediaContents" :bind="mediaContent"></videoContent>
</div>`
}