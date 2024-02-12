exports.ping = (req, res) => {
    console.log("pingController.js => ping => pinged");
    res.status(200).json({ message: 'server active' });
    console.log("pingController.js => ping => response sent");
}