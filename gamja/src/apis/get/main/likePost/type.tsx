export interface Type {
  id: number;
  title: string;
  author: { id: number; name: string };
  tags: string[];
  likeCount: number;
  commentCount: number;
  createdAt: string;
}
