<script >
const toolbar = [
  'undo redo removeformat',
  'formatselect fontselect fontsizeselect',
  'bold underline italic strikethrough superscript subscript',
  'backcolor forecolor bullist numlist',
  'outdent indent alignleft aligncenter alignright alignjustify lineheight',
  'table link image',
  'media'
]

const plugins = ['lists','table','textcolor, colorpicker emoticons,link image, noneditable', 'media']

export default {
  mounted() {
    window.tinymce.init({
      target: this.$refs.textarea,
      language: 'zh_CN',
      height: 800,
      automatic_uploads: false,
      object_resizing: 'img', // 仅支持对图片启用调整大小
      powerpaste_word_import: 'clean', // 保留从 word粘贴的基本样式
      default_link_target: '_blank',
      link_title: false, // 允许您禁用对话框title中的链接输入字段
      convert_urls: false, // 转换网址
      menubar: false, // 隐藏默认菜单栏
      toolbar,
      plugins
    })
  }
}
</script>

<template>
  <div>
   <h1>这是子应用</h1>
    <textarea ref="textarea" id="edit"></textarea>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
