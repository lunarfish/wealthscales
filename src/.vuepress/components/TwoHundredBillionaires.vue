<template>
    <v-card class="mt-5">
        <v-card-title>How many billionaires are there?</v-card-title>
        <v-card-text>
            <p>There are now around <a href="https://www.standard.co.uk/business/money/rich-list-2023-who-are-the-wealthiest-people-in-the-uk-b1082242.html#:~:text=There%20were%20a%20record%20171,the%20Sunday%20Times%20Rich%20List.&text=The%20billionaire%20Hinduja%20family%20has,more%20than%20%C2%A36%20billion.">200</a> billionaires in the UK</p>
            <p>If the richest has £35B let's guess that on average they have £8B each</p>
            <p>That's 200 x £8B X 2000 households = 3.2M households with nothing</p> 
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">3,200,000 households with £0<br/>(Roughly 8,000,000 people)</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">200 billionaires with £8B</span></v-col>
                <v-col :cols="6"><households icon="mdi-home-city" :size="20" :width="20" :height="16"/></v-col>
                <v-col :cols="6"><households icon="mdi-account-cash" :size="20" :width="20" :height="10"/></v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>