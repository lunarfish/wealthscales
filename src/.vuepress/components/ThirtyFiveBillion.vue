<template>
    <v-card class="my-5">
        <v-card-title>But most billionaires don't have £1B</v-card-title>
        <v-card-text>
            <p>The richest man in the UK has around <a href="https://www.thetimes.co.uk/sunday-times-rich-list">£35B</a></p>
            <p>That's equivalent to 70,000 households with nothing</p>
            <div style="min-height: 20px"/>
            <v-row>
                <v-col :cols="8" :style="{textAlign:'center'}"><span class="text-h2">70,000 households with £0<br/>(Roughly 175,000 people)</span></v-col>
                <v-col :cols="4" :style="{textAlign:'center'}"><span class="text-h2">1 person with £35B</span></v-col>
                <v-col :cols="8"><households icon="mdi-office-building" :size="12" :width="35" :height="20"/></v-col>
                <v-col :cols="4"><households icon="mdi-account-cash" :size="100" :width="1" :height="1"/></v-col>
                <v-col :cols="12"><see-saw :shift-right="3"/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>