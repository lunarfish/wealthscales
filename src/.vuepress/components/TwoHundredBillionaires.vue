<template>
    <v-card class="mt-5">
        <v-card-title>How many billionaires are there?</v-card-title>
        <v-card-text>
            <p>There are now around <a href="https://www.standard.co.uk/business/money/rich-list-2023-who-are-the-wealthiest-people-in-the-uk-b1082242.html#:~:text=There%20were%20a%20record%20171,the%20Sunday%20Times%20Rich%20List.&text=The%20billionaire%20Hinduja%20family%20has,more%20than%20%C2%A36%20billion.">170</a> billionaires in the UK</p>
            <p>The total wealth of billionaires is <a href="https://www.news.co.uk/latest-news/gopi-hinduja-and-family-top-the-sunday-times-rich-list/#:~:text=The%2068%2Dpage%20special%20edition,in%20last%20year's%20Rich%20List.">£683B</a>
            which averages at about £4B each.<v-icon>mdi-numeric-1-box-outline</v-icon></p>
            <p>That's 170 x £4B X 2000 households = 1.36M households with nothing</p> 
            <div style="min-height: 20px"/>
            <v-row class="mt-5">
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1,360,000 households with £0<br/>(Roughly 3,400,000 people)</span></v-col>
                <v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">170 billionaires with £4B</span></v-col>
                <v-col :cols="6"><households icon="mdi-home-city" :size="20" :width="12" :height="11"/></v-col>
                <v-col :cols="6"><households icon="mdi-account-cash" :size="20" :width="20" :height="10"/></v-col>
                <v-col :cols="12"><see-saw/></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>