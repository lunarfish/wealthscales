<template>
    <v-card class="mt-5">
        <v-card-title>How much to do the top 1% have?</v-card-title>
        <v-card-text>
            <p>According to Oxfam the top 1% of households have a total of <a href="https://www.oxfam.org.uk/media/press-releases/richest-1-grab-nearly-twice-as-much-new-wealth-as-rest-of-the-world-put-together/#:~:text=According%20to%20Credit%20Suisse%2C%20a,trillion%20(%C2%A32.8%20trillion).">£2.8T</a></p>
            <p>Here the rounding handles itself.</p>
            <p>1% of households is about 280K households</p>
            <p>That's an average of £10M each which is roughly 20 average households (50 people).</p>
            <p>So 280K x 20 = 5.6M households or 14M people</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">5,600,000 households with £0<br/>(Roughly 14,000,000 people)</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">Top 1% with a total of £2.8T<br/>£2,800,000,000,000</span></v-col>
                <v-col :cols="6"><households icon="mdi-home-city" :size="20" :width="20" :height="28"/></v-col>
                <v-col :cols="6">
                    <div style="text-align:center">
                        <span style="font-size:2em">Top 1%</span>
                        <br/>
                        <span>Around 700,000 people</span>
                    </div>
                    <households icon="mdi-account-cash" :size="100" :width="1" :height="1"/>
                </v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>