<template>
    <v-card class="my-5">
        <v-card-title>Notes and caveats</v-card-title>
        <v-card-text>
            <h3 class="notes">Rounding</h3>
            <p>In most cases I've rounded to make these stats more conservative.</p>
            <p>There are a few cases where the rounding makes the stats less conservative.</p>
            <p>I believe this is adequately balanced by the prior conservative rounding.</p>
            <p>I have rounded the average household size up from 2.4 to 2.5 but given the 
            comparisons are with a average household net worth of £500k increased from the 
            real figure of £437K that more than balances the scales.</p>
            <p>Using the real figure £1B is equivalent to 2,288 households at 2.4 people 
            which is 5,491 people. Using my figures of £500k and 2.5 people per household 
            this produces the more conservative but round number of 5,000 people.</p>
            <h3 class="notes">Stats age</h3>
            <p>Some of the stats quoted are from a few years ago. 
            The trend has consistently been for the wealth divide to grow and extreme 
            wealth to grow. More recent figures are more likely to show a widening rather 
            than a narrowing of the gap.</p>
        </v-card-text>
    </v-card>
</template>
<style>
h3.notes {
    font-size: 1.2em;
}
</style>