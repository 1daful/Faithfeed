export let mctpane = {
    template: `<div id="media.name" class="tab-pane fade in active">
    <mediaContent v-for="mediaContent in mediaContents" :bind="mediaContent"></mediaContent>
</div>`
}