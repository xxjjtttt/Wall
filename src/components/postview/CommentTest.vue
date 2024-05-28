<template>
  <div class="comment-container">
    <div v-for="(comment, index) in comments" :key="index" class="comment-item">
      <div class="comment-content">
        <div class="comment-text">{{ comment.text }}</div>
        <div class="comment-info">
          <span class="comment-author">{{ comment.author }}</span>
          <span class="comment-time">{{ comment.time }}</span>
        </div>
      </div>
      <div v-if="comment.replies.length > 0" class="comment-replies">
        <div v-for="(reply, replyIndex) in comment.replies" :key="replyIndex" class="comment-reply-item">
          <div class="comment-reply-content">
            <div class="comment-reply-text">{{ reply.text }}</div>
            <div class="comment-reply-info">
              <span class="comment-reply-author">{{ reply.author }}</span>
              <span class="comment-reply-time">{{ reply.time }}</span>
            </div>
          </div>
          <div :style="{ left: `${replyIndex * 20}px` }" class="comment-reply-line"></div>
        </div>
      </div>
      <div :style="{ left: `${index * 20}px` }" class="comment-line"></div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const comments = ref([
  {
    text: 'This is a comment',
    author: 'User1',
    time: '2023-05-11 10:00',
    replies: [
      {
        text: 'This is a reply',
        author: 'User2',
        time: '2023-05-11 10:05'
      },
      {
        text: 'This is another reply',
        author: 'User3',
        time: '2023-05-11 10:10'
      }
    ]
  },
  {
    text: 'This is another comment',
    author: 'User4',
    time: '2023-05-11 10:15',
    replies: []
  },
  {
    text: 'This is another comment',
    author: 'User4',
    time: '2023-05-11 10:15',
    replies: []
  },
  {
    text: 'This is another comment',
    author: 'User4',
    time: '2023-05-11 10:15',
    replies: []
  },
  {
    text: 'This is another comment',
    author: 'User4',
    time: '2023-05-11 10:15',
    replies: []
  }
]);
</script>

<style scoped>
.comment-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comment-item {
  position: relative;
  padding-left: 20px;
}

.comment-content {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}

.comment-text {
  font-weight: bold;
}

.comment-info {
  font-size: 12px;
  color: #666;
}

.comment-replies {
  margin-top: 10px;
}

.comment-reply-item {
  position: relative;
  padding-left: 20px;
}

.comment-reply-content {
  background-color: #e6e6e6;
  padding: 5px 10px;
  border-radius: 5px;
}

.comment-reply-text {
  font-size: 14px;
}

.comment-reply-info {
  font-size: 12px;
  color: #666;
}

.comment-line,
.comment-reply-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  background-color: #ccc;
}
</style>