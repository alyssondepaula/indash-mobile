interface IQuoteChart{

    minute: string
    close: string
    date: string
  
  }

function rename (obj: any, oldKey: string, newKey: string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }


export async function renameKey(data: IQuoteChart[], oldKey: string, newKey: string){

   
    data.forEach( (obj: any) => rename( obj, oldKey, newKey ) );

    return data;

}