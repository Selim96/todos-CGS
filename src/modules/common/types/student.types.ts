export interface IStudentAuth {
  wallet: string;
  name?: string;
  email?: string;
  profileImage?: string;
  typeOfLogin?: string;
}

export interface ITodo {
  title: string;
  description: string;
  status?: boolean;
  isPrivate?: boolean;
}

export type StatusPatch = {
  status: boolean;
};

export type PrivatePatch = {
  isPrivate: boolean;
};

export interface IItem extends ITodo {
  _id: string;
}

export interface IProps {
  data: IItem[];
}
