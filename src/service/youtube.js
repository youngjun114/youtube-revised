const youtube_key = process.env.REACT_APP_YOUTUBE_KEY;
class Youtube {
  constructor() {
    this.key = youtube_key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=36&key=${this.key}`,
      this.requestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=12&q=${query}&type=video&key=${this.key}`,
        this.requestOptions
      );
      const result = await response.json();
      return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;
