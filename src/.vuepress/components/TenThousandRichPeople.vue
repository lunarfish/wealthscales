<template>
    <v-card class="my-5">
        <v-card-title>Now we need an icon to represent lots of rich people</v-card-title>
        <v-card-text>
            <p>We'll make the icons represent the same scale again.</p>
            <p>One town on the left is 10,000 households.</p>
            <p>The cash on the right is 10,000 top 1% households.</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">10,000 households</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">10,000 households of the wealthiest top 1%</span></v-col>
                <v-col :cols="6"><households icon="mdi-home-city" :size="150" :width="1" :height="1"/></v-col>
                <v-col :cols="6"><households icon="mdi-cash-100" :size="150" :width="1" :height="1"/></v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>