const fn_query = require('D:/MU_Pathway/pathway_backend/backend/processor/qure.js'); // Update the path accordingly

// Define your test query here
const testQuery = 'SELECT * from User';

async function testDatabaseConnection() {
  try {
    const result = await fn_query(testQuery);

    console.log('Connected to the database successfully!');
    console.log('Result of the test query:');
    console.log(result);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testDatabaseConnection();
