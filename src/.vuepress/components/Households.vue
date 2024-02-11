<template>
    <div>
        <div :style="{textAlign:'center'}">
            <div :style="{textAlign:'center', display:'inline-block', lineHeight:size+'px', maxWidth: maxWidth+'px'}">
                <span v-for="x in totalCells">
                    <v-icon color="#1976D2" :size="size">{{ icon }}</v-icon>
                </span>
            </div>
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
        },
        totalCells() {
            return Array.from({length: (this.width * this.height)}, (_, i) => i + 1);
        },
        maxWidth() {
            return this.width * this.size;
        }
    }
}
</script>