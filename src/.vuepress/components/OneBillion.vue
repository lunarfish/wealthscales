<template>
    <v-card class="my-5">
        <v-card-title>So what about billionaires?</v-card-title>
        <v-card-text>
            <p>Someone with £1B has the equivalent of 2000 households.</p>
            <p>That means for each person with £1B there are almost 2000 households with nothing.</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="8" :style="{textAlign:'center'}"><span class="text-h2">2,000 households with £0</span></v-col>
                <v-col :cols="4" :style="{textAlign:'center'}"><span class="text-h2">1 person with £1B</span></v-col>
                <v-col :cols="8"><households icon="mdi-human-male-male-child" :size="10" :width="50" :height="40"/></v-col>
                <v-col :cols="4"><households icon="mdi-account-cash" :size="100" :width="1" :height="1"/></v-col>
                <v-col :cols="12"><see-saw :shift-right="4"/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>