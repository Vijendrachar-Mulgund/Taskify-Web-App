import { user } from './user-data.model';

export interface task {
  data: {
    tasks: [
      {
        completed: boolean;
        assignedTo: user;
        createdBy: user;
        deadline: Date;
        description: String;
        _id: String;
        title: String;
      }
    ];
  };
  results: number;
  status: String;
}