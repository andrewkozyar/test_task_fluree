const axios = require('axios');

const { FLUREE_URL } = require('../config/config');
const { dataBaseTablesEnum, dataBaseQueryEnum } = require('../constant');

module.exports = {
    findAllAwards: () => axios.post(`${FLUREE_URL}${dataBaseQueryEnum.QUERY_WITH}`, {
        query: {
            select: ['*'],
            from: dataBaseTablesEnum.AWARDS
        }
    }).then((res) => res.data)
};
