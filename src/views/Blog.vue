<template>
  <a-row>
    <a-col span="8">
      <a-statistic title="Followers":value="this.$data.user.follower"  />
      <a-statistic title="Followee" :value="this.$data.user.followee" />
    </a-col>
    <a-col :span="10">
      <a-comment v-for="item in contentList">
        <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ item.likes }}
        </span>
      </span>
          <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon
              type="dislike"
              :theme="action === 'disliked' ? 'filled' : 'outlined'"
              @click="dislike"
          />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ item.dislikes }}
        </span>
      </span>
          <span key="comment-basic-reply-to">Reply to</span>
        </template>
        <a slot="author">{{item.userName}}</a>
        <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
        />
        <p slot="content"  @click = beforeunloadFn>
         {{item.content}}
        </p>
        <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ moment().fromNow() }}</span>
        </a-tooltip>
      </a-comment>
    </a-col>
  </a-row>
</template>
<script>
import moment from 'moment';
import {getFolloweeCount} from "@/api/blog";
import {getFollowerCount} from "@/api/blog";
import {getTimeline} from "@/api/blog";
export default {
  data() {
    return {

      action: null,
      contentList:[
        {
          content:"12321",
          userId:"1508060668718440450",
          userName: "2",
          likes: 1,
          dislikes: 0
        },
        {
          content:"1231121",
          userId:"2",
          userName: "2",
          likes: 0,
          dislikes: 2
        }
      ],
      user:{
        userId:"1",
        userName: "1",
        follower: 1,
        followee: 1,
      },
      moment,
    };
  },
  methods: {
    like() {

      this.action = 'liked';
    },
    dislike() {
      this.action = 'disliked';
    },

    beforeunloadFn (e){
      console.log('刷新或关闭');
      console.log(this.$route.query);
      const userParam = this.$route.query.user;
      localStorage.username = userParam.username;
      localStorage.userId = userParam.userId;
      localStorage.token = userParam.token;
      console.log(localStorage.token)

      getTimeline(userParam.username, 1, 10).then((data) =>{
       this.contentList = data;
      });
      getFollowerCount(userParam.username).then(follower => {
        this.user.follower = follower
      });
      getFolloweeCount(userParam.username ).then(followee => {
        this.user.followee = followee
      });
    },
    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name;
      }
      if (localStorage.config) {
        this.config = localStorage.config;
      }
    },
  },
};
</script>