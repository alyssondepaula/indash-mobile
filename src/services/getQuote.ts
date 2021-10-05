import api from "./api";

export async function getQuote(symbol: string) {
      try {
          const response = await api.get(`${symbol}/quote/`, {
              params: {
                filter: 'symbol,companyName,changePercent,latestPrice'
              }
          });


          return response.data
      } catch (error: any) {
         throw new Error(error);
         
      }
  }
