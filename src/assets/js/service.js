export const fetchOptions = {
  queryString: "http://localhost:1717/books",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "X-Auth": localStorage.getItem("token"),
  },
};

export const authQueryString = "http://localhost:1717";
