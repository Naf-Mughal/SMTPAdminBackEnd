const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require("./modals/User")
const Link = require("./modals/Link")
const bcrypt = require('bcrypt');
const puppeteer = require('puppeteer');
const path = require('path');
const router = express.Router();
const salt = 10;
const app = express();
const jwt = require('jsonwebtoken');
const secret = "gsjhkldafsdghfbjkladsbvjklbxcljnvzbjhzsdbjlvsjhdfbgasjkdfh";
const dbURL = "mongodb+srv://nafeelaaqib:xDuLAtC8qf3Rwdeg@cluster0.dmdwok4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.set('trust proxy', true);
mongoose.connect(dbURL);


(async ()=>{
    const userDoc = await Link.create({ linkUrl: "https://lovely-gumption-589f9a.netlify.app/" })
    console.log(userDoc)
})();

router.post("/register", async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.create({ username: username, password: bcrypt.hashSync(password, salt) })
    res.json(userDoc)
})

router.post('/login', async (req, res) => {
    var ip = req.ip
    console.log(ip);
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({ id: userDoc._id, username });
            })
        }
    }
    else {
        res.status(400).json('Wrong credentials')
    }
});

router.get('/getlinks', async (req, res) => {
    try {
        const links = await Link.find({});
        if (links.length > 0) {
            res.status(200).json(links)
        }
        else res.status(200).json("No Records Found")
    } catch (error) {
        res.status(500).json(error);
    }
})

// router.get('/links', async (req, res) => {
//     try {
//         const links = await Link.find({});
//         if (links.length > 0) {
//             // const browserURL = `${req.ip}:9222`;
//             // const browser = await puppeteer.connect({ browserURL, headless: false });
//             const browser = await puppeteer.launch({
//                 headless: false,
//                 product: 'firefox',
//                 executablePath: '/usr/bin/firefox',
//                 args: ["--no-sandbox"]
//             })
//             try {
//                 links?.map(async (item) => {
//                     const page = await browser.newPage();
//                     page.setDefaultNavigationTimeout(0);
//                     await page.goto(item.linkUrl, { 'timeout': 600000, });
//                     await page.setViewport({ width: 1920, height: 1080 });
//                     await page.locator(item.usernameTag).fill(item.username);
//                     await page.locator(item.passwordTag).fill(item.password);
//                     await page.locator(item.buttonTag).click();
//                 })
//             }
//             catch (e) {
//                 console.log(e)
//                 res.status(500).json(e)
//             }
//             res.status(200).json("ok")
//         }
//     }
//     catch (e) {
//         console.log(e)
//         res.status(500).json(e)
//     }
// })


// router.post('/link', async (req, res) => {
//     const { linkUrl } = req.body;
//     // const data = (await fetch("http://localhost:9222/json/version"));
//     // const ipData = await data.json();
//     // console.log(data)
//     try {
//         const links = await Link.find({ linkUrl: String(linkUrl) });
//         if (links.length > 0) {
//             // const browserURL = `http://${req.ip}:9222`;
//             // const browser = await puppeteer.connect({ browserURL, headless: false });
//             const browser = await puppeteer.launch({
//                 headless: false,
//                 product: 'firefox',
//                 executablePath: '/usr/bin/firefox',
//                 args: ["--no-sandbox"]
//             })
//             try {
//                 links?.map(async (item) => {
//                     const page = await browser.newPage();
//                     page.setDefaultNavigationTimeout(0);
//                     await page.goto(item.linkUrl, { 'timeout': 600000, });
//                     await page.setViewport({ width: 1920, height: 1080 });
//                     await page.locator(item.usernameTag).fill(item.username);
//                     await page.locator(item.passwordTag).fill(item.password);
//                     await page.locator(item.buttonTag).click();
//                 })
//             }
//             catch (e) {
//                 console.log(e)
//                 res.status(500).json(e)
//             }
//             res.status(200).json("ok")
//         }
//     }
//     catch (e) {
//         console.log(e)
//         res.status(500).json(e)
//     }
// })

router.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    })
});

app.use("/api", router)

app.use(express.static(path.join(__dirname, 'react-app/build')));

app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, 'react-app/build', 'index.html'));
    }
});

app.listen(4000, () => {
    console.log("app started");
    // console.log(Register_Route)
})