const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: '我曾',
      artist: '隔壁老樊',
      url: 'http://www.ytmp3.cn/down/59121.mp3',
      cover: '',
    },
    {
      name: 'PDD洪荒之力',
      artist: 'Hoaprox',
      url: 'http://www.ytmp3.cn/down/48873.mp3',
      cover: '',
    },
    {
      name: '惊蛰',
      artist: '音阙诗听/王梓钰',
      url: 'http://www.ytmp3.cn/down/48755.mp3',
      cover: '',
    }
  ]
});
