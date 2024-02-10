---
home: true
---

<v-card class="my-5">
<v-card-title>Extreme wealth is responsible for massive wealth inequality</v-card-title>
<v-card-text>
<p>It is easy to think of millionaires and billionaires as broadly the same thing.</p>
<p>The difference is enormous.</p>
<p>It's so enormous that to illustrate it, you have to keep changing the scale.</p>
</v-card-text>
</v-card>
<v-spacer/>
<v-card class="my-5">
<v-card-title>Average household net worth</v-card-title>
<v-card-text>
<p>The average household net worth in the UK is a bit less than <a href="https://www.ons.gov.uk/economy/nationalaccounts/uksectoraccounts/bulletins/nationalbalancesheet/1995to2021#:~:text=In%202021%2C%20the%20average%20UK,%25%20and%2029.7%25%2C%20respectively.">£500k</a>.</p>
<p>So there are people with much more than that .. and there are people with much less than that.</p>
<p>What that means is for there to be a millionaire there has to be the equivalent of one household with nothing.</p>
<p>In reality there isn't one household with nothing, the cost is shared, but the point is that for 
the average net worth to be where it is, there has to be an equivalent number of people with less 
than the average in order for the scales to balance.</p>
<v-row class="mt-5">
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 household with £0</span></v-col>
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 person with £1M</span></v-col>
<v-col :cols="6"><households icon="mdi-human-male-male-child" :size="150" :width="1" :height="1"/></v-col>
<v-col :cols="6"><households icon="mdi-account-cash" :size="150" :width="1" :height="1"/></v-col>
<v-col :cols="12"><see-saw/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>Most millionaires don't have £1M</v-card-title>
<v-card-text>
<p>A millionaire with £2M is the equivalent of 4 households.</p>
<p>That means for each person with £2M there are 3 households with nothing.</p>
<v-row class="mt-5">
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">3 households with £0</span></v-col>
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 person with £2M</span></v-col>
<v-col :cols="6"><households icon="mdi-human-male-male-child" :size="100" :width="3" :height="1"/></v-col>
<v-col :cols="6"><households icon="mdi-account-cash" :size="100" :width="1" :height="1"/></v-col>
<v-col :cols="12"><see-saw/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>What about £5M?</v-card-title>
<v-card-text>
<p>A millionaire with £5M is the equivalent of 10 households.</p>
<p>That means for each person with £5M there are 9 households with nothing.</p>
<v-row class="mt-5">
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">9 households with £0</span></v-col>
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 person with £5M</span></v-col>
<v-col :cols="6"><households icon="mdi-human-male-male-child" :size="50" :width="3" :height="3"/></v-col>
<v-col :cols="6"><households icon="mdi-account-cash" :size="150" :width="1" :height="1"/></v-col>
<v-col :cols="12"><see-saw/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>What about £100M?</v-card-title>
<v-card-text>
<p>A millionaire with £100M is the equivalent of 200 households.</p>
<p>That means for each person with £100M there are around 200 households with nothing.</p>
<v-row class="mt-5">
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">200 households with £0</span></v-col>
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 person with £100M</span></v-col>
<v-col :cols="6"><households icon="mdi-human-male-male-child" :size="20" :width="20" :height="10"/></v-col>
<v-col :cols="6"><households icon="mdi-account-cash" :size="200" :width="1" :height="1"/></v-col>
<v-col :cols="12"><see-saw :shift-right="1"/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>So what about billionaires?</v-card-title>
<v-card-text>
<p>Someone with £1B has the equivalent of 2000 households.</p>
<p>That means for each person with £1B there are almost 2000 households with nothing.</p>
<v-row class="mt-5">
<v-col :cols="8" :style="{textAlign:'center'}"><span class="text-h2">2,000 households with £0</span></v-col>
<v-col :cols="4" :style="{textAlign:'center'}"><span class="text-h2">1 person with £1B</span></v-col>
<v-col :cols="8"><households icon="mdi-human-male-male-child" :size="8" :width="50" :height="40"/></v-col>
<v-col :cols="4"><households icon="mdi-account-cash" :size="200" :width="1" :height="1"/></v-col>
<v-col :cols="12"><see-saw :shift-right="4"/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>The icons are getting pretty small</v-card-title>
<v-card-text>
<p>Let's say a tower block is 100 households</p>
<v-row class="mt-5">
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 tower-block</span></v-col>
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">100 households</span></v-col>
<v-col :cols="6"><households icon="mdi-office-building" :size="250" :width="1" :height="1"/></v-col>
<v-col :cols="6"><households icon="mdi-human-male-male-child" :size="20" :width="10" :height="10"/></v-col>
<v-col :cols="12"><see-saw/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>But most billionaires don't have £1B</v-card-title>
<v-card-text>
<p>The richest man in the UK has around <a href="https://www.thetimes.co.uk/sunday-times-rich-list">£35B</a></p>
<p>That's equivalent to 70,000 households with nothing</p>
<v-row>
<v-col :cols="8" :style="{textAlign:'center'}"><span class="text-h2">70,000 households with £0</span></v-col>
<v-col :cols="4" :style="{textAlign:'center'}"><span class="text-h2">1 person with £35B</span></v-col>
<v-col :cols="8"><households icon="mdi-office-building" :size="12" :width="35" :height="20"/></v-col>
<v-col :cols="4"><households icon="mdi-account-cash" :size="200" :width="1" :height="1"/></v-col>
<v-col :cols="12"><see-saw :shift-right="3"/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>But there's not just 1 billionaire</v-card-title>
<v-card-text>
<p>Let's say a town is 100 tower-blocks</p>
<p>Remember that the tower-block was 100 households.</p>
<p>So each one of these is equivalent to 10,000 households.</p>
<v-row class="mt-5">
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">1 town</span></v-col>
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">100 tower-blocks<br/>(or 10,000 households)</span></v-col>
<v-col :cols="6"><households icon="mdi-home-city" :size="250" :width="1" :height="1"/></v-col>
<v-col :cols="6"><households icon="mdi-office-building" :size="20" :width="10" :height="10"/></v-col>
<v-col :cols="12"><see-saw/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="mt-5">
<v-card-title>How many billionaires are there?</v-card-title>
<v-card-text>
<p>There are now around <a href="https://www.standard.co.uk/business/money/rich-list-2023-who-are-the-wealthiest-people-in-the-uk-b1082242.html#:~:text=There%20were%20a%20record%20171,the%20Sunday%20Times%20Rich%20List.&text=The%20billionaire%20Hinduja%20family%20has,more%20than%20%C2%A36%20billion.">200</a> billionaires in the UK</p>
<p>If the richest has £35B let's guess that on average they have £8B each</p>
<p>That's 200 x £8B X 2000 households = 3.2M households with nothing</p> 
<v-row class="mt-5">
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">3,200,000 households with £0</span></v-col>
<v-col :cols="6" :style="{textAlign:'center'}"><span class="text-h2">200 billionaires with £8B</span></v-col>
<v-col :cols="6"><households icon="mdi-home-city" :size="20" :width="16" :height="20"/></v-col>
<v-col :cols="6"><households icon="mdi-account-cash" :size="20" :width="10" :height="20"/></v-col>
<v-col :cols="12"><see-saw/></v-col>
</v-row>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>How many households are there?</v-card-title>
<v-card-text>
<p>There are around <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/families/bulletins/familiesandhouseholds/2022#:~:text=Households-,There%20were%20an%20estimated%2028.2%20million%20households%20in%20the%20UK,2012%20(26.6%20million%20households).">28M</a> households in the UK</p>
<p>There has to be the equivalent of 3.2M households with nothing to 
account for those 200 billionaires.</p>
<p>That's more than 10% of the net worth of the UK population.</p>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>..and all that's ignoring the multi-millionaires</v-card-title>
<v-card-text>
<p>There are <a href="https://www.statista.com/statistics/434012/population-of-dollar-millionaires-in-the-united-kingdom-uk/#:~:text=In%202021%2C%20there%20were%20estimated,2%2C584%20in%20the%20previous%20year.">nearly 3000</a> of those.</p>
<p>That includes the roughly 200 billionaires and that 3000 number is measured in dollars but that's
still a lot more families that are a lot less than averagely well-off.</p>
</v-card-text>
</v-card>

<v-card class="my-5">
<v-card-title>What does it all mean?</v-card-title>
<v-card-text>
<p>The cost-of-living crisis, children in poverty, working families who can't afford 
food or fuel: These are not a consequence of Brexit, or COVID or immigration. 
They are the consequence of the systematic transfer of wealth from the poorest to 
the richest.</p>
</v-card-text>
</v-card>
