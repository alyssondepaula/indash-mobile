import api from "./api";

export async function getQuoteChart(symbol: string, chartInterval: number, exactDate: string) {
      try {
          const response = await api.get(`${symbol}/chart/`, {
              params: {
                chartInterval: chartInterval,
                exactDate: exactDate,
                filter: 'minute,close'
              }
          });


          return response.data
      } catch (error: any) {
         throw new Error(error);
         
      }
  }
