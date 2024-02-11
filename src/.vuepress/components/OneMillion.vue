<template>
    <v-card class="my-5">
        <v-card-title>Average household net worth</v-card-title>
        <v-card-text>
            <p>The average household net worth in the UK is a bit less than <a href="https://www.ons.gov.uk/economy/nationalaccounts/uksectoraccounts/bulletins/nationalbalancesheet/1995to2021#:~:text=In%202021%2C%20the%20average%20UK,%25%20and%2029.7%25%2C%20respectively.">£500k</a>.</p>
            <p>The quoted figure is more like £437K but I have rounded up to make the maths easier.</p>
            <p>Rounding up rather than down makes the wealth divide appear smaller than in reality.</p>
            <p>So there are people with much more than that .. and there are people with much less than that.</p>
            <p>What that means is for there to be a millionaire there has to be the equivalent of one household with nothing.</p>
            <p>In reality there isn't one household with nothing, the cost is shared, but the point is that for 
            the average net worth to be where it is; for every £1 above the average on one side of the scales
            there has to be someone with £1 less than the average on the other side of the scales.</p>
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 household with £0</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 person with £1M</span></v-col>
                <v-col :cols="6"><households icon="mdi-human-male-male-child" :size="150" :width="1" :height="1"/></v-col>
                <v-col :cols="6"><households icon="mdi-account-cash" :size="150" :width="1" :height="1"/></v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>