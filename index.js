const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require("./modals/User")
const Link = require("./modals/Link")
const bcrypt = require('bcrypt');
var ObjectId = require('mongoose').Types.ObjectId;
const path = require('path');
const router = express.Router();
const salt = 10;
const app = express();
const jwt = require('jsonwebtoken');
var secret = "";
const dbURL = "mongodb+srv://nafeelaaqib:xDuLAtC8qf3Rwdeg@cluster0.dmdwok4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.set('trust proxy', true);
mongoose.connect(dbURL);


// (async () => {
//     const userDoc = await Link.create({ linkUrl: "http://vmi2000569.contaboserver.net:8080/home/dashboard" })
//     console.log(userDoc)
// })();

router.post("/register", async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.create({ username: username, password: bcrypt.hashSync(password, salt) })
    res.json(userDoc)
})

router.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const sec = Math.random().toString(18).slice(2);
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ username, id: userDoc._id, userRole: userDoc.userRole }, sec, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({ id: userDoc._id, username, token: token, userRole: userDoc.userRole });
            })
        }
        secret = sec;
    }
    else {
        res.status(400).json('Wrong credentials')
    }
});

router.use((req, res, next) => {
    const token = req?.headers?.authorization?.slice(6);
    if (token !== "" && token !== undefined) {
        jwt.verify(token, secret, {}, (err, info) => {
            if (info === "" || info === undefined) next(res.status(401).json("Unauthorized"));
            else next();
        })
    }
    else next(res.status(401).json("Unauthorized"));
})

router.get('/profile', (req, res) => {
    const token = req?.headers?.authorization?.slice(6);
    jwt.verify(token, secret, {}, (err, info) => {
        res.json(info);
    })
});

router.get('/links',
    async (req, res) => {
        let user = {};
        const token = req?.headers?.authorization?.slice(6);
        jwt.verify(token, secret, {}, (err, info) => {
            user = info;
        })
        try {
            let links = [];
            if (user?.userRole === 'admin') {
                links = await Link.find({});
            }
            else {
                links = await Link.find({ username: user?.username })
            }
            if (links.length > 0) {
                res.status(200).json(links);
            }
            else res.status(200).json("No Records Found");
        } catch (error) {
            res.status(500).json(error);
        }
    })

router.use((req, res, next) => {
    const token = req?.headers?.authorization?.slice(6);
    jwt.verify(token, secret, {}, (err, info) => {
        if (info.userRole === "admin") next();
        else next(res.status(403).json("You don't have permissions"));
    })
})
router.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        const resDoc = users.filter(item => {
            if (item.userRole !== "admin") { return item }
        })
        res.status(200).json(resDoc)
    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.post("/addUser", async (req, res) => {
    const { username, password, links } = req.body
    let userDoc = {};
    try {
        const user = await User.find({ username: username })
        if (user[0]?.username === username) {
            userDoc = [{ username: "" }]
            res.status(400).json("record exists");
        }
        else {
            userDoc = await User.create({ username: username, password: bcrypt.hashSync(password, salt) })
        }
    }
    catch (e) { res.status(500).json(e) }
    if (userDoc?.username === username) {
        try {
            const linksDoc = links?.map(async item => {
                await Link.findOneAndUpdate({ name: item }, { $addToSet: { username: username } }, { new: true })
            })
            res.json("User Created")
        }
        catch (e) { res.status(400).json(e) }
    }
})

router.post("/delUser", async (req, res) => {
    const { username, links } = req.body
    let userDoc = {};
    try {
        const user = await User.findOneAndDelete({ username: username })
        if (user.username === username) {
            try {
                const linksDoc = links?.map(async item => {
                    await Link.findOneAndUpdate({ name: item }, { $pull: { username: username } }, { new: true })
                })
                res.json("User Deleted")
            }
            catch (e) { res.status(400).json(e) }
        }
        else {
            res.status(400).json("record does not exists");
        }
    }
    catch (e) { res.status(400).json("record does not exist") }
})



app.use("/api", router)

// app.use(express.static(path.join(__dirname, 'react-app/build')));
// app.use(express.static(path.join(__dirname, '/public/images')));

// app.use((req, res, next) => {
//     if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
//         next();
//     } else {
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//         res.header('Expires', '-1');
//         res.header('Pragma', 'no-cache');
//         res.sendFile(path.join(__dirname, 'react-app/build', 'index.html'));
//     }

//     const data = res.json;

// });

app.listen(4000, () => {
    console.log("app started");
    // console.log(Register_Route)
})