export interface userType {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  courses: courseType[];
  successStory: successStoryType[];
  isVerified: boolean;
  block: boolean;
  avatar: string;
}

export interface teacherType {
  _id: string;
  name: string;
  role: string;
  tags?: string;
  batch: string[];
  email: string;
  phone: string;
  avatar?: string;
  createdAt?: string;
}

export interface cartType {
  _id: string;
  userId: string;
  course: courseType;
  coupon: string;
  discount: number;
  finalPrice: number;
  createdAt: string;
  updatedAt?: string;
}

export interface courseType {
  _id: string;
  title: string;
  description: string;
  sellingPrice: number;
  discountedPrice: number;
  thumb: string;
  price: number;
  successStories: successStoryType[];
  users: [];
  category: categoryType;
  createdAt: string;
  updatedAt: string;
}

export interface categoryType {
  _id: string;
  name: string;
  thumb: string;
  courses: courseType[];
  createdAt: string;
  updatedAt: string;
}

export interface successStoryType {
  _id: string;
  userID: string;
  course: string;
  video: string;
  thumb: string;
  createdAt: string;
  updatedAt: string;
}

export interface purchaseType {
  _id: string;
  userId: userType;
  course: courseType;
  isApproved: false;
  courseCompleted: boolean;
  paid: boolean;
  coupon: string;
  discount: number;
  finalPrice: number;
  createdAt: string;
  updatedAt: string;
  certificate: string;
}
export interface PageProps {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export interface AuthContextType {
  user: userType | null;
  loading: boolean;
  msg: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    phone: string,
    email: string,
    password: string,
  ) => Promise<void | null>;
  updateUser: (
    name: string,
    email: string,
    address: string,
    phone: string,
  ) => Promise<void | null>;
  updatePassword: (
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
  ) => Promise<void | null>;
  verifyEmail: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  verifyResetPasswordToken: (token: string) => Promise<boolean>;
  passwordReset: (
    token: string,
    password: string,
    confirmPassword: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => Promise<void | null>;
}

export interface CartContextType {
  cart: cartType | null;
  loading: boolean;
  msg: string;
  goToPurchase: () => Promise<void>;
  applyCoupon: (coupon: string) => Promise<void>;
  fetchCart: () => Promise<void>;
  addCart: (id: string) => Promise<void>;
  deleteCart: () => Promise<void>;
}

export interface CourseContextType {
  // msg?: string | null;
  courseList: purchaseType[] | null;
  // loading?: boolean;
  fetchUserCourseList: () => Promise<void>;
  // fetchAllCourses: () => Promise<void>;
  // allBatchesList: batchType[] | null;
  // allTeachersList: teacherType[] | null;
  // allCoursesList: courseType[] | null;
  // allCategoriesList: categoryType[] | null;
  // allPendingPurchases: purchaseType[] | null;
  // createCourse: (data: any) => Promise<void>;
  // updateCourse: (id: string, data: any) => Promise<void>;
  // completeCourse: (id: string) => Promise<void>;
  // createCategory: (data: any) => Promise<void>;
  // updateCategory: (id: string, data: any) => Promise<void>;
  // createTeacher: (data: any) => Promise<void>;
  // updateTeacher: (id: string, data: any) => Promise<void>;
  // createBatch: (data: any) => Promise<void>;
  // updateBatch: (id: string, data: any) => Promise<void>;
  // enrollBatch: (data: any) => Promise<void>;
}
