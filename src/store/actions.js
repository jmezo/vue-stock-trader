import axios from 'axios';

export const loadData = ({commit}) => {
  axios.get('data.json')
    .then((response) => {
      const data = response.data;
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio, funds
        };

        commit('stocks/SET_STOCKS', stocks);
        commit('portfolio/SET_PORTFOLIO', portfolio);
      }
    });
};

export const saveData = (context) => {
  const data = {
    funds: context.getters['portfolio/funds'],
    stockPortfolio: context.getters['portfolio/stockPortfolio'],
    stocks: context.getters['stocks/stocks']
  }
  axios.put('data.json', data);
}
