<template>
    <div>
        <div :style="{textAlign:'center'}" v-for="y in heightCells">
            <span v-for="x in widthCells">
                <v-icon color="#1976D2" :size="size">{{ icon }}</v-icon>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Households',
    props: {
        icon: {
            type: String,
            default: () => 'mdi-home-heart',
        },
        width: {
            type: Number,
            default: () => 1,
        },
        height: {
            type: Number,
            default: () => 1,
        },
        size: {
            type: Number,
            default: () => 60,
        }
    },
    computed: {
        widthCells() {
            return Array.from({length: this.width}, (_, i) => i + 1);
        },
        heightCells() {
            return Array.from({length: this.height}, (_, i) => i + 1);
        }
    }
}
</script>