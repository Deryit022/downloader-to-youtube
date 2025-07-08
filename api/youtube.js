
const { YtMp3, YtMp4 } = require('../function/youtube');
module.exports = async (req, res) => {
  const { url, type } = req.query;

  if (!url || !type) {
    return res.status(400).json({ status: false, message: "Parameter 'url' dan 'type' diperlukan (mp3/mp4)." });
  }

  try {
    if (type === "mp3") {
      const result = await YtMp3(url);
      return res.status(200).json({ status: true, format: "mp3", result });
    } else if (type === "mp4") {
      const result = await YtMp4(url);
      return res.status(200).json({ status: true, format: "mp4", result });
    } else {
      return res.status(400).json({ status: false, message: "Tipe harus 'mp3' atau 'mp4'" });
    }
  } catch (error) {
    return res.status(500).json({ status: false, error: error.toString() });
  }
};
