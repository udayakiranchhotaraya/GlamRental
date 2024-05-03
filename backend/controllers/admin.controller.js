const mongoose = require('mongoose');

const {
    User, Dress, Admin
} = require('../models');
const { generateToken } = require('../middleware/jwt-auth');

const message_403 = "Only admins can access this route";

async function registerNewAdmin (req, res) {
    if (req.user.isAdmin) {
        try {
            const { username, name, email, password } = req.body;
            const admin = await Admin.create({
                username: username,
                name: name,
                email: email,
                password: password,
                role: 'admin'
            });

            // const payload = {
            //     userId: admin.id,
            //     name: admin.name,
            //     isAdmin: true
            // }
            // const token = generateToken(payload);

            // if (admin && token) {
            //     res.status(201).json({"token" : token, "user" : admin});
            // } else {
            //     res.status(500).json({"message" : "Some error occurred!"});
            // }

            res.status(201).json({"message" : "New admin added.", "newAdmin" : admin});
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    } else {
        res.status(403).json({"message" : message_403});
    }
}

async function loginAdmin (req, res) {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({username: username});
        if (!(admin) || !(await admin.comparePassword(password))) {
            res.status(401).json({"message" : "Invalid credentials"});
        }

        const payload = {
            userId: admin.id,
            name: admin.name,
            isAdmin: true
        }
        const token = generateToken(payload);

        res.status(200).json({"token" : token, "user": admin});
    } catch (error) {
        res.status(400).json({"message" : error.message});
    }
}

// async function admins (req, res ) {
//     try {
//         const admins = await Admin.find();
//         res.status(200).json(admins);
//     } catch (error) {
//         res.status(500).json({"message" : "Some error occurred."});
//     }
// }

async function getAllUsers (req, res) {
    if (req.user.isAdmin) {
        try {
            const users = await User.find();
            if (users.length > 0) {
                res.status(200).json(users);
            } else {
                res.status(404).json({"message" : "No record(s) found"});
            }
        } catch (error) {
            res.status(500).json({"message" : error.message});
        }
    } else {
        res.status(403).json({"message" : message_403});
    }
}

async function addDress (req, res) {
    if (req.user.isAdmin) {
        try {
            const { title, category, gender, sizes, colors, material, price, imageUrls, description, quantity, owner_id } = req.body;
            if (quantity > 0) {
                availability = true;
            } else availability = false;
            const dress = await Dress.create({
                title: title,
                category: category,
                gender: gender,
                sizes: sizes,
                colors: colors,
                material: material,
                price: price,
                imageUrl: imageUrls,
                description: description,
                total_quantity: quantity,
                available_quantity: quantity,
                availability: availability,
                owner_id: owner_id
            });
            if (dress) {
                res.status(201).json(dress);
            } else {
                res.status(400).json({"message" : "Some error occurred!"})
            }
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    } else {
        res.status(403).json({"message" : message_403});
    }
}

async function updateDressDetails (req, res) {
    if (req.user.isAdmin) {
        try {
            const { id } = req.params;
            const { title, category, gender, sizes, colors, material, price, imageUrls, description, total_quantity, available_quantity, owner_id } = req.body;
            const dress = await Dress.findOneAndUpdate({_id: id}, {
                title: title,
                category: category,
                gender: gender,
                sizes: sizes,
                colors: colors,
                material: material,
                price: price,
                imageUrl: imageUrls,
                description: description,
                total_quantity: total_quantity,
                available_quantity: available_quantity,
                owner_id: owner_id
            }, {
                new: true
            });
            if (dress) {
                res.status(201).json(dress);
            } else {
                res.status(400).json({"message" : "Some error occurred!"})
            }
        } catch (error) {
            res.status(400).json({"message" : error.message});
        }
    } else {
        res.status(403).json({"message" : message_403});
    }
}

module.exports = {
    // admins,
    registerNewAdmin,
    loginAdmin,
    getAllUsers,
    addDress,
    updateDressDetails
};