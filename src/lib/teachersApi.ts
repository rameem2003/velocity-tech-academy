export const getTeachersRequest = async () => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teachers`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Avoid caching
    });
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch teachers");
  }
};

export const getSingleTeacherRequest = async (id: string) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teachers/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Avoid caching
    });
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch teacher");
  }
};

export const createTeachersRequest = async (data: any) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/teachers/create`,
      {
        method: "POST",
        credentials: "include",
        body: data,
      },
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to create teacher");
  }
};

export const updateTeachersRequest = async (id: string, data: any) => {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/teachers/update/${id}`,
      {
        method: "PUT",
        credentials: "include",
        body: data,
      },
    );
    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to update teacher");
  }
};
