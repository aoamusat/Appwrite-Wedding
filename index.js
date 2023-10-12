const { Client, Account, ID } = Appwrite;

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("652652cd9c86481a80c9");

const account = new Account(client);

const enroll = (event) => {
  try {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Register User
    account.create(ID.unique(), email, phone, name).then(
      (response) => {
        alert("Registration successful");
        console.log(response);
      },
      (err) => {
        alert(err.message);
        console.log(err);
      },
    );

    const promise = account.createVerification("http://localhost");
    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      },
    );
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
