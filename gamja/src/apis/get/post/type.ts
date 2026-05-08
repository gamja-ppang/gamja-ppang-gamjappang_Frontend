export interface Type {
  postId: number;
  author: {
    authorId: number;
    authorName: string;
  };
  title: string;
  content: string;
  tags: string[];
  viewCount: number;
  heartCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
}
