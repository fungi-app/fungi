import http from "../http-common";
import IFamily from "../types/family"

class FamilyDataService {
  getAll() {
    return http.get<Array<IFamily>>("/families");
  }

  get(slug: string) {
    return http.get<IFamily>(`/families/${slug}`);
  }

  findByName(title: string) {
    return http.get<Array<IFamily>>(`/families?name=${title}`);
  }
}

export default new FamilyDataService();
