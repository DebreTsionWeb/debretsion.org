export namespace Routes {
  export const API_URL = `http://localhost:4200/api`;

  export const MEMBER_ROUTES = {
    REGISTER_USER(): string {
      return `${API_URL}/user/register`;
    },
    LOGIN_USER(): string {
      return `${API_URL}/user/login`;
    },
    GET_USER(id: string): string {
      return `${API_URL}/user/${id}`;
    },
    UPDATE_USER(id: string): string {
      return `${API_URL}/user/${id}`;
    },
    DELETE_USER(id: string): string {
      return `${API_URL}/user/${id}`;
    },
  };

  export const ADMIN_ROUTES = {
    REGISTER_USER(): string {
      return `${API_URL}/user/register`;
    },
    LOGIN_USER(): string {
      return `${API_URL}/user/login`;
    },
    GET_USER(id: string): string {
      return `${API_URL}/user/${id}`;
    },
    UPDATE_USER(id: string): string {
      return `${API_URL}/user/${id}`;
    },
    DELETE_USER(id: string): string {
      return `${API_URL}/user/${id}`;
    },
  };

  export const POST_ROUTES = {
    CREATE_POST(): string {
      return `${API_URL}/post/create`;
    },
    GET_POST_IN_DISTANCE(distance: number): string {
      return `${API_URL}/post/posts/in/${distance}`;
    },
    GET_POST(userId: string): string {
      return `${API_URL}/post/user/${userId}`;
    },
    GET_POST_BY_ID(postId: string): string {
      return `${API_URL}/post/${postId}`;
    },
    UPDATE_POST(postId: string, userId: string): string {
      return `${API_URL}/post/${postId}/${userId}`;
    },
    DELETE_POST(postId: string, userId: string): string {
      return `${API_URL}/post/${postId}/${userId}`;
    },
  };

  export const LOCATION_ROUTES = {
    CREATE_LOCATION(): string {
      return `${API_URL}/location/create`;
    },
    GET_LOCATIONS(): string {
      return `${API_URL}/location/locations`;
    },
    GET_LOCATION(id: string): string {
      return `${API_URL}/location/location/${id}`;
    },
    UPDATE_LOCATION(id: string): string {
      return `${API_URL}/location/${id}`;
    },
    DELETE_LOCATION(id: string): string {
      return `${API_URL}/location/${id}`;
    },
  };

  export const MEDIA_ROUTES = {
    GET_ALL_MEDIA(): string {
      return `${API_URL}/media`;
    },
    GET_MEDIA_BY_ID(mediaId: string): string {
      return `${API_URL}/media/${mediaId}`;
    },
    GET_MEDIA_BY_POST_ID(postId: string): string {
      return `${API_URL}/media/post/${postId}`;
    },
    GET_MEDIA_BY_USER_ID(userId: string): string {
      return `${API_URL}/media/user/${userId}`;
    },
  };
}
