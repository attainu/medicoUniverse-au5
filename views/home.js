var url = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5f1bb41330aa479192a8a88a0bbd785a";
$(document).ready(function () {
    $('.articles').addClass('loader');
    $.ajax({
        url: url,
        success: function (result) {
            $('.articles').removeClass('loader');
            var count = 0;
            var art = 0;
            while (art<4){
                if(result.articles[count].urlToImage != null){
                    var col = $('<div></div>').addClass('col-3 card');
                    col.append($('<img src="'+result.articles[count].urlToImage+'" alt="articleImage" width="100%" height="120px">').addClass('card-img-top mt-2'));
                    var cardBody = $('<div class="card-body"></div>');
                    col.append(cardBody);
                    cardBody.append($('<p>'+result.articles[count].title+'</p>').addClass('card-text article-text'));
                    cardBody.append($('<a href="'+result.articles[count].url+'" target="_blank">Read more</a>').addClass('article-text'));
                    $('.articles').append(col);
                    art++;
                }
                count++;
            }
            
        }
    });
});