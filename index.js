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
app.use(cors());
app.use(express.json())
mongoose.connect(dbURL);

// (async () => {
//     console.log("ok");
//     const doc = await Link.create({ linkUrl : "http://hwsrv-1223902.hostwindsdns.com:8080/" , username: "admin", password: bcrypt.hashSync("12345678", salt) , usernameTag : "#username", passwordTag : "#password" , buttonTag: ".MuiButtonBase-root.MuiButton-root.MuiButton-contained", })
//     console.log("ok");
// })();

// const link = async () => {
//     try {
//         const links = await Link.find({});
//         if (links.length > 0) {
//             const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
//             links?.map(async (item) => {
//                 const page = await browser.newPage();
//                 await page.goto(item.linkUrl);
//                 await page.setViewport({ width: 1920, height: 1080 });
//                 await page.locator(item.usernameTag).fill(item.username);
//                 await page.locator(item.passwordTag).fill(item.password);
//                 await page.locator(item.buttonTag).click();
//             })
//             // await browser.close();
//         }
//     }
//     catch (e) {
//         // res.status(500).json(e)
//         console.log(e);
//     }
// };


// link()


router.post("/register", async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.create({ username: username, password: bcrypt.hashSync(password, salt) })
    res.json(userDoc)
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    console.log(userDoc, username)

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

router.get('/links', async (req, res) => {
    try {
        const links = await Link.find({});
        if (links.length > 0) {
            const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
            try {
                links?.map(async (item) => {
                    const page = await browser.newPage();
                    page.setDefaultNavigationTimeout(0);
                    await page.goto(item.linkUrl, { 'timeout': 600000, });
                    await page.setViewport({ width: 1920, height: 1080 });
                    await page.locator(item.usernameTag).fill(item.username);
                    await page.locator(item.passwordTag).fill(item.password);
                    await page.locator(item.buttonTag).click();
                })
            }
            catch (e) {
                res.status(500).json(e)
            }
            res.status(200).json("ok")
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})


router.post('/link', async (req, res) => {
    const { linkUrl } = req.body;
    console.log(linkUrl)
    try {
        const links = await Link.find({ linkUrl: String(linkUrl) });
        if (links.length > 0) {
            const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
            try {
                links?.map(async (item) => {
                    const page = await browser.newPage();
                    page.setDefaultNavigationTimeout(0);
                    await page.goto(item.linkUrl, { 'timeout': 600000, });
                    await page.setViewport({ width: 1920, height: 1080 });
                    await page.locator(item.usernameTag).fill(item.username);
                    await page.locator(item.passwordTag).fill(item.password);
                    await page.locator(item.buttonTag).click();
                })
            }
            catch (e) {
                res.status(500).json(e)
            }
            res.status(200).json("ok")
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.post('/addLink', async (req, res) => {

})

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

app.listen('4000', () => {
    console.log("app started");
    // console.log(Register_Route)
})