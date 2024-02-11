<template>
    <v-card class="my-5">
        <v-card-title>Most millionaires don't have £1M</v-card-title>
        <v-card-text>
            <p>A millionaire with £2M is the equivalent of 4 households.</p>
            <p>That means for each person with £2M there are 3 households with nothing.</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">3 households with £0</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 person with £2M</span></v-col>
                <v-col :cols="6"><households icon="mdi-human-male-male-child" :size="100" :width="3" :height="1"/></v-col>
                <v-col :cols="6"><households icon="mdi-account-cash" :size="100" :width="1" :height="1"/></v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>