const axios = require('axios');

const { FLUREE_URL } = require('../config/config');
const { dataBaseTablesEnum, dataBaseQueryEnum } = require('../constant');

module.exports = {
    findAllTeam: () => axios.post(`${FLUREE_URL}${dataBaseQueryEnum.QUERY_WITH}`, {
        query: {
            select: ['*'],
            from: dataBaseTablesEnum.TEAM
        }
    }).then((res) => res.data),

    createTeam: (teamData) => {
        axios.post(`${FLUREE_URL}${dataBaseQueryEnum.TRANSACT}`, teamData)
            .then((res) => res.data)
            .catch((e) => {
                throw new Error(e);
            });
    },

    findPlayerByName: (name) => axios.post(`${FLUREE_URL}${dataBaseQueryEnum.QUERY_WITH}`, {
        query: {
            select: [
                '*',
                { 'team/awards': ['*'] }
            ],
            from: [
                `${dataBaseTablesEnum.TEAM}/name`,
                `${name}`
            ]
        }
    }).then((res) => res.data)
};
