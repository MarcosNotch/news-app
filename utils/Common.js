
function SortNewsByImage(news) {

    const newsWithImage = news.data.filter((item) => item.image !== null);
    const newsWithoutImage = news.data.filter((item) => item.image === null);

    const newsResponse = {
        pagination: news.pagination,
        data:  [...newsWithImage, ...newsWithoutImage]
    }

    return newsResponse;

}

export { SortNewsByImage }