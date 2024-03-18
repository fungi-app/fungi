import http from "../http-common";
import IMushroom from "../types/mushroom"

class MushroomDataService {
  getAll() {
    return http.get<Array<IMushroom>>("/mushrooms");
  }

  getPaginated() {
    return http.get<Array<IMushroom>>("/mushrooms");
  }

  get(slug: string) {
    return http.get<IMushroom>(`/mushrooms/${slug}`);
  }

  findByTitle(title: string) {
    return http.get<Array<IMushroom>>(`/mushrooms?title=${title}`);
  }
}

export default new MushroomDataService();
