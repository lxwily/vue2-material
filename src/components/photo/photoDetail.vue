<template>
<div>
    <md-theme md-name="indigo">
        <headerBack :title="title"></headerBack>
        <div class="marin">
            <md-spinner v-if="loading" :md-size="60" md-indeterminate></md-spinner>
            <div v-else class="photoImg">
                <img :src="photoData.url" />
            </div>
        </div>
    </md-theme>
</div>
</template>

<script>
import headerBack from '../../common/header/header'
    export default {
        data() {
            return {
                title : "photo",
                photoData : null,
                loading : true
            }
        },
        created () {
            setTimeout(()=>{
                this.loading = false;
            },1500)
            this.photoData = this.$store.state.photoUrl;
        },
        components :{
            headerBack
        }
    }
</script>
<style>
    .marin{
        margin-top:66px;
    }
</style>
