<template>
    <v-card class="my-5">
        <v-card-title>The icons are getting pretty small</v-card-title>
        <v-card-text>
            <p>Let's say a tower block is 100 households</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 tower-block</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">100 households<br/>(Roughly 2,500 people)</span></v-col>
                <v-col :cols="6"><households icon="mdi-office-building" :size="250" :width="1" :height="1"/></v-col>
                <v-col :cols="6"><households icon="mdi-human-male-male-child" :size="20" :width="10" :height="10"/></v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>