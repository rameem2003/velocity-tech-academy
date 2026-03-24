export const allCourses = async (limit: number = 0) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses?limit=${limit}`,
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch courses");
  }
};

export const allCategories = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch categories");
  }
};

export const singleCategory = async (id: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${id}`);
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch category");
  }
};

export const createCategoryRequest = async (data: FormData) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category/create`,
      {
        method: "POST",
        credentials: "include",
        body: data,
      },
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to create category");
  }
};

export const updateCategoryRequest = async (id: string, data: FormData) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category/update/${id}`,
      {
        method: "PUT",
        credentials: "include",
        body: data,
      },
    );
    // console.log(res);

    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to update category");
  }
};

export const singleCourse = async (id: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`);
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch course");
  }
};

export const createCourseRequest = async (data: FormData) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/create`, {
      method: "POST",
      credentials: "include",
      body: data,
    });
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to create course");
  }
};

export const updateCourseRequest = async (id: string, data: FormData) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses/update/${id}`,
      {
        method: "PUT",
        credentials: "include",
        body: data,
      },
    );
    // console.log(res);

    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to update course");
  }
};

export const purchaseCourse = async () => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses/purchase/`,
      {
        method: "POST",
        credentials: "include",
      },
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to purchase course");
  }
};

export const completeCourseRequest = async (courseId: string) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses/complete/${courseId}`,
      {
        method: "POST",
        credentials: "include",
      },
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to complete course");
  }
};

export const allBatchesRequest = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/batches`);
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch batches");
  }
};

export const singleBatchRequest = async (id: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/batches/${id}`);
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch batch");
  }
};

export const createBatchRequest = async (data: any) => {
  console.log(data);

  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/batches/create`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (error: any) {
    console.log(error);

    throw new Error(error.message || "Failed to create batch");
  }
};

export const updateBatchRequest = async (id: string, data: any) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/batches/update/${id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to update batch");
  }
};

export const enrollBatchRequest = async (data: any) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/batches/enroll`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to enroll batch");
  }
};
