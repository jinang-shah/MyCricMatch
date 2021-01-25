const API_KEY = "949oLLeKyKZMXa7CcDZxWdTqwhA2"

export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
         .then((res)=>res.json())
         .catch((err)=>console.log(err));
};

export const getMatchDetail=(id)=>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`

    return fetch(url)
         .then((res)=>res.json())
         .catch((err)=>console.log(err));
};