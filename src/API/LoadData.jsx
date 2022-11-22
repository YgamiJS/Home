import axios from "axios";

export default class Servise {
  static async getAll(limit, page , url) {
    const response = await axios.get(
      url ,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );

    return response;
  }
}
