<template>
    <q-page>
        <div
        class="row q-col-gutter-x-xs q-col-gutter-y-lg"
        style="margin: 0; padding: 0"
        >
            <div
                class="col-4"
                v-for="item in top.data"
                :key="item.clothes_id"
            >
                <div class="my-content">
                <q-card style="border-radius: 0; box-shadow: 0">
                    {{item.clothes_id}}
                    <q-img :src="item.url" />
                    <q-checkbox :true-value="selectedtop" :name="item.clothes_id" :val="item.clothes_id" v-model="selectedtop" @input="checkOutfit()" />
                </q-card>
                </div>
            </div>
        </div>
        <q-separator />
        <div
        class="row q-col-gutter-x-xs q-col-gutter-y-lg"
        style="margin: 0; padding: 0"
        >
            <div
                class="col-4"
                v-for="item in bottom.data"
                :key="item.clothes_id"
            >
                <div class="my-content">
                <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                    <q-checkbox :true-value="selected" :val="selelctedBottom" :v-model="selected.bottom" />
                </q-card>
                </div>
            </div>
        </div>
        <div
        class="row q-col-gutter-x-xs q-col-gutter-y-lg"
        style="margin: 0; padding: 0"
        >
            <div
                class="col-4"
                v-for="item in outer.data"
                :key="item.clothes_id"
            >
                <div class="my-content">
                <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                    <q-checkbox true-value="selected" value="selelctedOuter" v-model="selected.outer" />
                </q-card>
                </div>
            </div>
        </div>
        <div
        class="row q-col-gutter-x-xs q-col-gutter-y-lg"
        style="margin: 0; padding: 0"
        >
            <div
                class="col-4"
                v-for="item in onepiece.data"
                :key="item.clothes_id"
            >
                <div class="my-content">
                <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                    <q-checkbox true-value="selected" value="selelctedOnepiece" v-model="selected.onepiece" />
                </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>
<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
        tempVal:[false,false,false],
        top: null,
        bottom: null,
        outer: null,
        onepiece: null,
        selectedtop: null,
        selected:{
            top: null,
            bottom: null,
            outer: null,
            onepiece: null
        }
        };
    },
    mounted () {
        this.getTop(),
        this.getBottom(),
        this.getOuter(),
        this.getOnePiece()
    },
    methods: {
        getTop() {
            Axios.get(
                "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/top"
            ).then((res) => {
                console.log(res);
                this.top = res;
            });
            console.log("finished");
        },
        getBottom() {
            Axios.get(
                "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/bottom"
            ).then((res) => {
                console.log(res);
                this.bottom = res;
            });
            console.log("finished");
        },
        getOuter() {
            Axios.get(
                "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/outer"
            ).then((res) => {
                console.log(res);
                this.outer = res;
            });
            console.log("finished");
        },
        getOnePiece() {
            Axios.get(
                "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/6/filter/one_piece"
            ).then((res) => {
                console.log(res);
                this.onepiece = res;
            });
            console.log("finished");
        },
        checkOutfit() {
            console.log(this.selectedtop);
        }
    } 
}
</script>