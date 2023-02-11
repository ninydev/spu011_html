const postModel = require('./../models/PostModel')

/**
 * Получение всех постов на проекте
 * @param request - полученный запрос
 * @param response - объект для построения ответа
 */
exports.getPosts = function(request, response){
    postModel.find({}, function (err, allPosts) {
            if(err){
                console.log(err)
                return response.status(422).json(err)
            }
            return response.status(200).json(allPosts)
        })
};


/**
 * Создание поста
 * @param request
 * @param response
 */
exports.postPost = function (request, response) {
    const body = request.body
    const newPost = new postModel(body)

    newPost.save(function (err) {
        if(err){
            console.log(err)
            return response.status(422).json(err)
        }
        return response.status(201).json(newPost)
    })
}