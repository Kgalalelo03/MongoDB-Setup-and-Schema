const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const employees = [
    { id: 1, name: 'John', surname: 'Doe', gender: 'Male', department: 'Engineering', salary: 50000 },
    { id: 2, name: 'Jane', surname: 'Smith', gender: 'Female', department: 'Marketing', salary: 60000 },
    { id: 3, name: 'Michael', surname: 'Brown', gender: 'Male', department: 'Finance', salary: 55000 },
    { id: 4, name: 'Emily', surname: 'Davis', gender: 'Female', department: 'Engineering', salary: 65000 },
    { id: 5, name: 'Anna', surname: 'Wilson', gender: 'Female', department: 'Marketing', salary: 62000 }
];

app.get('/api/employees', (req, res) => {
    res.json(employees);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
