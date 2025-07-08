const { ytdlv2 } = require('@vreden/youtube_scraper');

async function YtMp3(url) {
  const data = await ytdlv2(url, 'audio');
  return data;
}

async function YtMp4(url) {
  const data = await ytdlv2(url, 'video');
  return data;
}

module.exports = { YtMp3, YtMp4 };