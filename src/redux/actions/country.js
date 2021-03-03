import axios from "axios";
import {GET_BY_COUNTRY} from './const'


export function fetchNews( ) {
    return  async dispatch =>
    {
            let titles = []
         await fetch('http://api.datanews.io/v1/headlines?country=ua&apiKey=0d45wukww0ucqyj6gppmertax')
            .then(response => response.json())
            .then(response => response.hits.map((el,i) => {
                return titles[i] = {
                    title : el.title,
                    imageUrl : el.imageUrl,
                    description: el.description,
                    content: el.content,
                    pubDate: el.pubDate
                }
            }))




        dispatch({type: GET_BY_COUNTRY, payload : titles})
        // console.log(titles)


    }
}








