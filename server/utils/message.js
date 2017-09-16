var generateMessage = (from, text) => {
    return {
        from,
        text,
        createAt: new Date().getTime()
    };
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.hu/maps?q=${latitude},${longitude}`,
        createAt: new Date().getTime()
    };
};

module.exports = {generateMessage, generateLocationMessage};
