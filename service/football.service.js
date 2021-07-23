const axios = require('axios');

const { FLUREE_URL } = require('../config/config');
const { dataBaseTablesEnum, dataBaseQueryEnum } = require('../constant');

module.exports = {
    findAllFootball: () => axios.post(`${FLUREE_URL}${dataBaseQueryEnum.QUERY_WITH}`, {
        query: {
            select: ['*'],
            from: dataBaseTablesEnum.FOOTBALL
        }
    }).then((res) => res.data),

    createFootball: (footballData) => axios.post(`${FLUREE_URL}${dataBaseQueryEnum.TRANSACT}`, [footballData])
        .then((res) => res.data)
        .catch((e) => {
            throw new Error(e);
        }),

    findFootballByCountry: (country) => axios.post(`${FLUREE_URL}${dataBaseQueryEnum.QUERY_WITH}`, {
        query: {
            select: [
                '*',
                { 'football/team': ['*'] }
            ],
            from: [
                `${dataBaseTablesEnum.FOOTBALL}/country`,
                `${country}`
            ]
        }
    }).then((res) => res.data)
};
