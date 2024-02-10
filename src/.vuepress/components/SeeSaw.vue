<template>
    <div>
        <v-divider></v-divider>
        <v-row>
            <v-col v-if="shiftRight" :cols="shiftRight"> </v-col>
            <v-col :cols="fulcrumCols">
                <div :style="{textAlign: 'center'}">
                    <v-icon :size="150">mdi-menu-up</v-icon>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'SeeSaw',
    props: {
        shiftRight: {
            type: Number, 
            default: () => 0,
        }
    },
    computed: {
        fulcrumCols() {
            return 12 - this.shiftRight
        }
    }
}
</script>