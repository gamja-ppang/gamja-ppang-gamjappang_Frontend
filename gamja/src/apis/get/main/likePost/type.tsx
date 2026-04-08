export interface Type {
  id: number;
  title: string;
  author: { id: number; name: string };
  tags: [];
  likeCount: string;
  commentCount: number;
  createdAt: string;
}
