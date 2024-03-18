import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`)
});

app.get('/dinoname', async(request, response) => {
    try {
        const fetchResponse = await fetch('https://dinoipsum.com/api/?format=json&words=10&paragraphs=3');
        const data = await fetchResponse.json();
        response.send(data);
    } catch (err) {
        console.error('Where did all the dinosaurs go?', err);
        response.status(500).send('An error occurred while fetching dinosaur data');
    }
});