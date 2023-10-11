const { Client } = Appwrite;

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("652652cd9c86481a80c9");

console.log({ APP_WRITE_CLIENT: client });
