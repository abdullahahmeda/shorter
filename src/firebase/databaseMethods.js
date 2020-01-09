import db from "./firebaseDatabase";

const linksRef = "links";

function writeLink(originalLink) {
  const newKey = db.ref().push().key;
  const shortLink =
    Math.random() > 0.5
      ? `${newKey.slice(5, 7) + newKey.slice(17, 20)}`
      : `${newKey.slice(7, 10) + newKey.slice(18, 20)}`;
  const newLink = {
    shortLink,
    originalLink
  };
  db.ref(linksRef + "/" + shortLink).set(newLink);
  return newLink;
}

async function readLink(shortLink) {
  const response = await db
    .ref(linksRef + "/" + shortLink)
    .once("value")
    .then(snapshot => {
      if (snapshot.val() && snapshot.val().originalLink) {
        return snapshot.val().originalLink;
      }
      return null;
    });
  return response;
}

export { writeLink, readLink };
