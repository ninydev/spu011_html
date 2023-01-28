/**
 * Получение всех постов на проекте
 * @param request - полученный запрос
 * @param response - объект для построения ответа
 */
exports.getPosts = function(request, response){
    response.send("Список постов");
};


/**
 * Создание поста
 * @param request
 * @param response
 */
exports.postPost = function (request, response) {
    response.send("Пост добавлен");
}