export let mcctpane = {
    template: `<div id="media.name" class="tab-pane fade in active">
    <musicContent v-for="mediaContent in mediaContents" :bind="mediaContent"></musicContent>
</div>`
}
