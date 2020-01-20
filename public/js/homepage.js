var url = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5f1bb41330aa479192a8a88a0bbd785a";

$(document).ready(function () {
    $('.loader-cont').show();
    $.ajax({
        url: url,
        success: function (result) {
            var count = 0;
            var art = 0;
            while (art<4){
                if(result.articles[count].urlToImage != null){
                    var col = $('<div></div>').addClass('col-lg-3 col-md-6 col-sm-6 col-12 card shadow');
                    col.append($('<img src="'+result.articles[count].urlToImage+'" alt="articleImage" height="120px">').addClass('card-img-top mt-2'));
                    var cardBody = $('<div class="card-body"></div>');
                    col.append(cardBody);
                    cardBody.append($('<div><u>Source: '+result.articles[count].source.name+'</u></div>').css({"font-size":"12px","margin-bottom":"6px"}));
                    cardBody.append($('<p>'+result.articles[count].title+'</p>').addClass('card-text article-text'));
                    cardBody.append($('<a href="'+result.articles[count].url+'" target="_blank">Read more</a>').css("font-size", "12px"));
                    $('.articles').append(col);
                    art++;
                }
                count++;
            }
            $('.loader-cont').hide();
        }
    });
   
});

