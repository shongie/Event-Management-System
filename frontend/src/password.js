

   axios
      .post(
        "https://localhost:1337/api/auth/forgot-password",
        data,
        {
          headers: {
            Authorization:
              "Bearer  ",
          },
        }
      )
      .then((response) => {

        // Handle success.

        console.log(response);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      }); 