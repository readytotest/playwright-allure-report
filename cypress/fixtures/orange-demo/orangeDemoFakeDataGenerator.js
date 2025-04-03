//Random number generator
const numRandom = () => Math.floor((Math.random() + 1) * 99);
const insertNum = numRandom();


const randomEmailGenerator = `john.smith999${insertNum}@fake-email-999${insertNum}.org`;
const randomFirstNameGenerator = `John999${insertNum}`;
const randomMiddleNameGenerator = `Jacob999${insertNum}`;
const randomLastNameGenerator = `Smith999${insertNum}`;
const employeeStaticPartialFirstName = 'John999';
const usernameGenerator = `userlogin${insertNum}`;
const passwordGenerator = `testpassword${insertNum}`;



//

export { employeeStaticPartialFirstName, randomEmailGenerator, randomFirstNameGenerator, randomMiddleNameGenerator, randomLastNameGenerator, usernameGenerator, passwordGenerator };
