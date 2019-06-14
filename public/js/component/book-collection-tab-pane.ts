export let bctpane = {
    template: `<div id="media.name" class="tab-pane fade in active">
    <bookContent v-for="mediaContent in mediaContents" :bind="mediaContent"></bookContent>
</div>`
}