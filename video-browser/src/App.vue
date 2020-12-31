<template>
  <div>
    <SearchBar @termChange="onTermChange" />
    <VideoList />
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import dotenv from 'dotenv';

dotenv.config();

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: process.env.VUE_APP_API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm,
          },
        })
        .then((response) => console.log(response));
    },
  },
};
</script>

<style></style>
