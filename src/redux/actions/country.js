import axios from "axios";
import {GET_BY_COUNTRY,SHOW_CONTENT} from './const'




export function fetchNews(topicSelected ,querySelected) {
    return  async dispatch =>
    {
            if (querySelected === undefined) {querySelected = ''}
            let titles = []
            let url = 'http://api.datanews.io/v1/headlines?size=25&apiKey=0d45wukww0ucqyj6gppmertax'+'&topic='+topicSelected +
                '&q='+ querySelected
        console.log(url)
         await fetch(url)
            .then(response => response.json())
            .then(response => response.hits.map((el,i) => {
                return titles[i] = {
                    title : el.title,
                    imageUrl : el.imageUrl,
                    description: el.description,
                    content: el.content,
                    pubDate: el.pubDate,
                    url: el.url
                }
            }))




        dispatch({type: GET_BY_COUNTRY, payload : titles})



    }
}








