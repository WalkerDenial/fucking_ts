export interface Epic {
  id: number;
  name: string;
  projectId: number;
  kanbanId: number;
  start: number; // 开始时间
  end: number; // 结束时间
}
