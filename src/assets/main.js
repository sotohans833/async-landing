const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCT4Jg8h03dD0iN3Pb5L0PMA&part=snippet%2Cid&order=date&maxResults=9";

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b21eba5663msh87eb22f7306c242p17dea4jsncc424154c765',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const res = await fetch(urlApi, options);
    const data = await res.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0, 4).join("")}
        `;
        content.innerHTML = view;
    }
    catch(err){
        console.error(err);
    }
})();