import axios from 'axios';
import { ITodo, StatusPatch, PrivatePatch } from '../common/types/student.types';

interface IService {
  baseUrl: string | undefined;
  fetchingService: typeof axios;
  apiVersion: string;
}

class HttpSerivce implements IService {
  constructor(
    public baseUrl = process.env.SERVER_URL,
    public fetchingService = axios,
    public apiVersion = 'api'
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  // private populateTokenToHeaderConfig() {
  //   return {
  //     Authorization: localStorage.getItem('token')
  //   };
  // }

  // private extractUrlAndDataFromConfig({ data, url, ...configWithoutDataAndUrl }) {
  //   return configWithoutDataAndUrl;
  // }

  get() {
    // if (withAuth) {
    //   config.headers = {
    //     ...config.headers,
    //     ...this.populateTokenToHeaderConfig()
    //   };
    // }
    return this.fetchingService.get(this.getFullApiUrl('todos'));
  }

  getById(id: string) {
    return this.fetchingService.get(this.getFullApiUrl(`todos/${id}`));
  }

  post(data: ITodo) {
    // if (withAuth) {
    //   config.headers = {
    //     ...config.headers,
    //     ...this.populateTokenToHeaderConfig()
    //   };
    // }
    return this.fetchingService.post(this.getFullApiUrl('todos'), data);
  }

  delete(url: string) {
    return this.fetchingService.delete(this.getFullApiUrl(`todos/${url}`));
  }

  patch(url: string, data: StatusPatch | PrivatePatch) {
    return this.fetchingService.patch(this.getFullApiUrl(`todos/${url}`), data);
  }
}

const serviceApi = new HttpSerivce('http://localhost:4001');

export default serviceApi;
