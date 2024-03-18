import http from "../http-common";
import IPublication from "../types/publication"

class PublicationDataService {
  getAll() {
    return http.get<Array<IPublication>>("/publications");
  }

  getPaginated() {
    return http.get<Array<IPublication>>("/publications");
  }

  get(slug: string) {
    return http.get<IPublication>(`/publications/${slug}`);
  }

  findByTitle(title: string) {
    return http.get<Array<IPublication>>(`/publications?title=${title}`);
  }
}

export default new PublicationDataService();
