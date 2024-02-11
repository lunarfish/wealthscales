<template>
    <v-card class="my-5">
    <v-card-title>What about £100M?</v-card-title>
        <v-card-text>
            <p>A millionaire with £100M is the equivalent of 200 households.</p>
            <p>That means for each person with £100M there are around 200 households with nothing.</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">200 households with £0</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 person with £100M</span></v-col>
                <v-col :cols="6"><households icon="mdi-human-male-male-child" :size="20" :width="20" :height="10"/></v-col>
                <v-col :cols="6"><households icon="mdi-account-cash" :size="150" :width="1" :height="1"/></v-col>
                <v-col :cols="12"><see-saw :shift-right="1"/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>