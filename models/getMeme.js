const cheerio = require('cheerio');
const axios = require('axios');
const moment = require('moment');
const website = 'https://kwejk.pl/';

exports.run = () => {
    axios.get(website)
        .then(response => {
            const $ = cheerio.load(response.data);
            const memeCollection = $('.full-image');
            exports.memeData = {
                id: 1,
                title: memeCollection.attr('alt'),
                src: memeCollection.attr('src'),
                date: moment().format('YYYY/MM/DD')
            };
        })
        .catch(error => {
            console.log(error);
        });
};