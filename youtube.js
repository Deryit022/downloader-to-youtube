const { YtMp3, YtMp4 } = require('./youtube-function');

module.exports = async (req, res) => {
  const { url, type } = req.query;
  if (!url || !type) {
    return res.status(400).json({ status: false, message: "Parameter 'url' dan 'type' diperlukan (mp3/mp4)." });
  }
  try {
    let result;
    if (type === 'mp3') {
      result = await YtMp3(url);
    } else if (type === 'mp4') {
      result = await YtMp4(url);
    } else {
      return res.status(400).json({ status: false, message: "Tipe harus 'mp3' atau 'mp4'." });
    }
    return res.status(200).json({ status: true, format: type, result });
  } catch (error) {
    return res.status(500).json({ status: false, error: error.toString() });
  }
};