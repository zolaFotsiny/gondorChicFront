// Retrieves the bearer token from localStorage
export const getBearerToken = async () => {
  const token = localStorage.getItem("token");
  return `Bearer ${token}`;
};

// Checks if the API is accessible by verifying the internet connection
const checkApiAccessibility = async () => {
  try {
    if (!navigator.onLine) {
      throw new Error("No internet connection");
    }
  } catch (error) {
    throw new Error(
      "API is not accessible, check your internet connection",
      error
    );
  }
};

// Initializes the API response by setting headers and making the request
const responseInit = async (
  url,
  method,
  authorization = null,
  body = null,
  contentType = "application/json",
  navigation = null
) => {
  await checkApiAccessibility();

  const content = {
    method,
    headers: {
      "Content-Type": contentType,
      Authorization: authorization || "",
    },
    body: body !== null ? body : undefined,
  };

  const response = await fetch(url, content);
  if (navigation && response.status === 403) {
    // Redirect to the signin screen
    navigation.navigate("/");
  }
  return response;
};

// Makes an API call to the specified URL with the given parameters
export const apiCall = async (
  url,
  method,
  authorization = null,
  body = null,
  navigation = null,
  contentType = "application/json"
) => {
  try {
    const response = await responseInit(
      url,
      method,
      authorization,
      body,
      contentType,
      navigation
    );
    const data = await response.json();
    if (data?.error) {
      throw new Error(data?.message);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
