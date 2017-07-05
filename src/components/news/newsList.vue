<template>
  <section>
      <div class="media" v-for="item in list">
          <a :href="'#/news/detailList/' + item.id">
              <div class="media-left">
                  <img :src="item.img_url">
              </div>
              <div class="media-body">
                  <h4 class="media-heading">{{ item.title }}</h4>
                  <p>{{ item.zhaiyao }}</p>
              </div>
          </a>
      </div>
  </section>
</template>

<script>
    export default {
        data: function () {
            return {
                list: []
            }
        },
        created: function () {
            this.getNewsList();
        },
        methods: {
            getNewsList: function () {
                var url = 'http://139.199.192.48:8888/api/getnewslist';
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.list = rep.body.message;
                        console.log(this.list);
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .media {
        margin-bottom: 10px;
        overflow: hidden;
        .media-left {
            float: left;
            img {
                width: 64px;
                height: 64px;
            }
        }
        .media-body {
           .media-heading {
               font-size: 14px;
               font-weight:400;
           }
        }
    }
</style>