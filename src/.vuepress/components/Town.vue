<template>
    <v-card class="my-5">
        <v-card-title>But there's not just 1 billionaire</v-card-title>
        <v-card-text>
            <p>Let's say a town is 100 tower-blocks</p>
            <p>Remember that the tower-block was 100 households.</p>
            <p>So each of these icons is equivalent to 10,000 households (around 25,000 people).</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 town</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">100 tower-blocks<br/>(Roughly 25,000 people)<br/>(or 10,000 households)</span></v-col>
                <v-col :cols="6"><households icon="mdi-home-city" :size="150" :width="1" :height="1"/></v-col>
                <v-col :cols="6"><households icon="mdi-office-building" :size="20" :width="10" :height="10"/></v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>