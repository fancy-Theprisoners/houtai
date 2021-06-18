<template>
    <div class="page001Main">
        <img src="../../assets/image/page001/bg.png" alt="背景">
        <div class="page001Title">
            <div class="text">智慧旅游大数据平台</div>
        </div>
        <div class="homeIcon" @click="home()"><img src="../../assets/image/page001/home_icon.png" alt="首页"></div>
        <div class="time_data">
            <div class="data">{{year}}年{{month}}月{{day}}日</div>
            <div class="times">{{hours}}:{{min}}:{{sec}} {{week}}</div>
        </div>
        <div class="main">
            <div class="module_1 module">
                <div class="jqptyyba">
                    <moduleTitle :count="jqptyyba" style="margin-top: 1%; margin-left: 1%;" />
                </div>
                <div class="dqkqwr">
                    <moduleTitle :count="dqkqwr" style="margin-top: 1%; margin-left: 1%;" />
                </div>
            </div>
            <div class="module_2 module"></div>
            <div class="module_3 module"></div>
            <div class="module_4 module"></div>
        </div>
    </div>
</template>

<script>
    import router from '@/router'
    import moduleTitle from '../../components/moduleTitle'
    export default {
        components: {
            moduleTitle,
        },
        name: 'Page001',
        data() {
            return {
                year: '',
                month: '',
                day: '',
                hours: '',
                min: '',
                sec: '',
                week: '',
                jqptyyba: '景区平台运营报告',
                dqkqwr: '当前空气污染物'
            }
        },
        created() {
            this.time();
        },
        methods: {
            time() {
                setInterval(() => {
                    let date = new Date();
                    this.year = date.getFullYear();
                    this.month = date.getMonth() + 1;
                    this.day = date.getDate();
                    this.hours = date.getHours();
                    this.min = date.getMinutes();
                    this.sec = date.getSeconds();
                    this.week = date.getDay();
                    switch (this.week) {
                        case 1:
                            this.week = '星期一'
                            break;
                        case 2:
                            this.week = '星期二'
                            break;
                        case 3:
                            this.week = '星期三'
                            break;
                        case 4:
                            this.week = '星期四'
                            break;
                        case 5:
                            this.week = '星期五'
                            break;
                        case 6:
                            this.week = '星期六'
                            break;
                        case 7:
                            this.week = '星期日'
                            break;
                        default:
                            break;
                    }
                }, 1000)
            },
            home() {
                router.push({
                    path: '/about'
                })
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
    }

    .page001Main {
        position: absolute;
        width: 99.895%;
        height: 100%;
        z-index: -1;
    }

    .page001Title {
        position: absolute;
        width: 100%;
        height: 7%;
    }

    .page001Title>.text {
        display: flex;
        align-items: center;
        height: 100%;
        position: absolute;
        left: 41%;
        font-weight: 700;
        letter-spacing: 5px;
        font-size: 28px;
        background: linear-gradient(to bottom, #0d8fe5, #6c0bd9);
        -webkit-background-clip: text;
        color: transparent;
    }

    .jqptyybg {
        position: absolute;
        width: 35%;
        height: 70%;
        top: 20%;
    }

    .homeIcon {
        position: absolute;
        width: 38px;
        height: 38px;
        border: 1px solid #0e72e4;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 1.1%;
        left: 1%;
        cursor: pointer;
    }

    .homeIcon>img {
        width: 30px;
        height: 30px;
    }

    .data {
        float: left;
        color: #0e72e4;
    }

    .times {
        color: #0e72e4;
        float: left;
        margin-left: 2%;
    }

    .time_data {
        position: relative;
        top: 2%;
        left: 6%;
        width: 20%;
    }

    .main {
        position: absolute;
        width: 99.6%;
        height: 92%;
        top: 7%;
        display: flex;
        flex-direction: row;
    }

    .module {
        width: 10%;
        height: 100%;
        border: 1px yellow solid;
    }

    .module_1 {
        width: 40%;
    }

    .module_2 {
        width: 20%;
    }

    .module_3 {
        width: 20%;
    }

    .module_4 {
        width: 20%;
    }

    .jqptyyba {
        width: 96%;
        height: 60%;
        border: solid 1px #28067c;
        margin-left: 2%;
        margin-top: 2%;
    }

    .dqkqwr {
        width: 96%;
        height: 35%;
        border: solid 1px #28067c;
        margin-left: 2%;
        margin-top: 2%;
    }
    moduleTitle {
        margin-top: 1%;
    }
</style>