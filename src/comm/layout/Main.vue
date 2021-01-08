<template>
  <div class="page-box">
    <div class="page-column">
      <div>
        <div class="top-container">
          <div v-for="item in navList" :key="item.title" style="margin-right: 30px">
            <router-link :to="item.link">{{item.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="page-row">
      <div class="page-aside">
        <div style="text-align: center">aside</div>
      </div>
      <div class="page-main">
        <router-view></router-view>
      </div>
    </div>
    <div class="page-footer"> footer </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      img: '',
      navList: [
        {
          index: 1,
          title: '数据标准',
          currentPage: true,
          link: '/page1'
        },
        {
          index: 2,
          title: '数据分类',
          link: '/page2'
        },
        {
          index: 3,
          title: '数据地图',
          link: '/page3'
        },
        {
          index: 4,
          title: '数据质量',
          link: '/page4'
        }
      ]
    }
  },
  created () {
    this.img = `${location.protocol}//${location.host}/static/static3/img3.png`
  }
}
</script>

<style lang="scss" scoped>
  .page-box {
   width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .top-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #b3c0d1;
    padding-left: 240px;
  }
  .page-column {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .page-row {
    display:flex;
  }
  .page-aside {
    width: 240px;
    background-color: #d3dce6;
  }
  .page-main {
    flex: 1;
    height: calc(100vh - 120px);
  }
  .page-footer {
    width: 100%;
    height: 60px;
    background-color: #b3c0d1;
    text-align: center;
  }
</style>
