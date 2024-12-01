const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let empls = []

app.get('/', (req, res) => {
    res.send("Working")
});

app.get('/emp', (req, res) => {
    res.send(empls)
});

app.post('/emp/add/', (req, res) => {
    const emp = req.body;
    empls.push(emp);
    // res.send("added !!!")
    console.log(emp)

    res.send({ message: "Employee added!", employees: empls })
});


app.get('/emp/search/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let ans = empls.find(item => item.id === id)
    if (ans)
        res.send({ message: "Employee found", employee: ans });
    else
        res.status(404).send({ error: "emp not found" });
});

// localhost:5004/emp/delete?id=3
app.delete('/emp/delete', (req, res) => {
    let id = parseInt(req.query.id);
    let index = empls.findIndex(item => item.id === id)
    let empList = empls[index]
    // res.send({ message: "index found", emp: empList })

    if (index >= 0) {res.send({ message: "deleted", })
    let deletedEmp = empls.splice(index, 1);
    }
    else { // If the employee is not found
        res.status(404).send({ error: "Employee not found" });
    }
});


// Modify Employee Endpoint
app.put('/emp/modify', (req, res) => {
    const { id, name, salary, age } = req.body;

    // Find index using findIndex (instead of indexOf)
    let index = empls.findIndex(item => item.id === id);

    if (index >= 0) {
        // Update fields if provided
        if (name) empls[index].name = name;
        if (salary) empls[index].salary = salary;
        if (age) empls[index].age = age;

        // Send updated employee object
        return res.send({ message: "Employee updated", employee: empls[index] });
    } else {
        // Send error if employee not found
        return res.status(404).send({ message: "Employee not found", employees: empls });
    }
});

// Start the server
app.listen(5004, () => {
    console.log("Server running on port 5004");
});

