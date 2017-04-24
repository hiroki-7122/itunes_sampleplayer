var imgURL=new Array(30);
// 前回分リストを消去
function clearSong(){
  $(function(){
    $("#error").text("");
    $(".itunes-embed").remove();
  });
};

 //optionで選択した値を取得
function getSelect(){
    $(function(){
      getInfo($("#search").val(), $("#maxNum").val());
    });
}


// 渡された情報をもとに検索、データ取得
function getInfo (keyWord, maxNum) {
  $('.block').css('width',window.innerWidth);
  $('.memoarea').css('width',window.innerWidth);

  // 基本情報
  var params = {
    lang: 'ja_jp',
    entry: 'music',
    media: 'music',
    country: 'JP',
    term: keyWord,
    limit: maxNum,
  };

  // APIに投げる
  $.ajax({
    url: 'https://itunes.apple.com/search',
    method: 'GET',
    data: params,
    dataType: 'jsonp',

    //成功
    success: function(json) {
      console.log(json);
      showData(json);
    },

    //失敗
    error: function() {
      $(function(){
        $("#error").text("＊ エラーが発生しました ＊");
      });
    },
  });
};

// 取得したデータを表示する
function showData(json) {
  // データが取得できた
  if (json.results.length != 0) {
    var sArray = shuffleArrayList(json.results.length);
    for (var i = 0, len = json.results.length; i < len; i++) {
      var result = json.results[i];
      var html;

      // 最初のデータのみ画面上に表示する
      if (sArray[i] == 0){
        imgURL[i]=result.artworkUrl100;
        html = '<div id ="' + sArray[i] + '" class="music itunes-embed freezed itunes-kind-song"><a id="u' + sArray[i] + '" href="' + result.trackViewUrl + '&amp;at=10ldcR" rel="nofollow" target="_blank"></a><div class="itunes-embed-info"><p class="itunes-embed-title"><a id="s' + sArray[i] + '" href="' + result.trackViewUrl + '&amp;at=10ldcR" rel="nofollow" target="_blank">' + result.trackName + '</a></p><div id="a' + sArray[i] + '" class="itunes-embed-artist">' + result.artistName + '</div><div class="itunes-embed-preview"><audio id="m' + sArray[i] + '" src="' + result.previewUrl + '" controls="" ></audio></div>';
      }
      // 他は隠しておく
      else{
        imgURL[i]=result.artworkUrl100;
        html = '<div id ="' + sArray[i] + '" class="itunes-embed freezed itunes-kind-song" style="display:none;"><a id="u' + sArray[i] + '" href="' + result.trackViewUrl + '&amp;at=10ldcR" rel="nofollow" target="_blank"></a><div class="itunes-embed-info"><p class="itunes-embed-title"><a id="s' + sArray[i] + '" href="' + result.trackViewUrl + '&amp;at=10ldcR" rel="nofollow" target="_blank">' + result.trackName + '</a></p><div id="a' + sArray[i] + '" class="itunes-embed-artist">' + result.artistName + '</div><div class="itunes-embed-preview"><audio id="m' + sArray[i] + '" src="' + result.previewUrl + '" controls="" ></audio></div>';
      }
      // htmlにアペンド
      $('#displayArea').append(html);
      $("#prevSong").show();
      $("#nextSong").show();
      $("#favSong").show();
      $("#fav").show();
    }
    // 1曲目を再生
    playSong(0 , 0);
  }
  // データが取得できなかった
  else {
    $("#error").text("＊ Not Found ＊");
  }
}
// 取得した曲をランダムに配列に入れる(Fisher-Yates)
function shuffleArrayList(j){
  var array = [];
  for (var k = 0; k < j; k++) {
    array[k] = k;
  }
  Array.prototype.shuffle = function() {
    var i = this.length;
    while(i){
      var j = Math.floor(Math.random()*i);
      var t = this[--i];
      this[i] = this[j];
      this[j] = t;
    }
    return this;
  }
  array.shuffle();
  return array;
}

// 前の曲を再生
function prevSong(){
  $(function(){
    var num = $(".music").length;
    if (num == 1) {
      $("#error").text("＊ First Music ＊");
    }
    else {
      $("#" + (num -1)).css("display", "none");
      $("#" + (num - 1)).removeClass("music");
      $("#" + (num - 2)).show();
      stopSong(num - 1);
      playSong(num - 2);
    }
  });
};

// 次の曲を再生
function nextSong(){
  $(function(){
    var num = $(".music").length;
    if ($("#" + num).length == 0) {
      $("#error").text("＊ Last Music ＊");
    }
    else {
      $("#" + (num - 1)).css("display", "none");
      $("#" + num).addClass("music");
      $("#" + num).show();
      stopSong(num - 1);
      playSong(num);
    }
  });
};

// 曲を停止
function stopSong(num) {
  $(function(){
    $("#error").text("");
    $("#m" + num).get(0).pause();
    $("#m" + num).get(0).currentTime = 0;
  });
};

// 曲を再生
function playSong(num2){
  $(function(){
    $("#error").text("");
    $("#m" + num2).get(0).play();
    // 曲終了時に次の曲を再生させる
    $("#m" + num2).bind("ended", function(){ if($("#m" + num2).get(0).ended){nextSong();}});
  });
};

// あとでちゃんと聞くリスト追加
function favSong(){
  $(function(){
    var num = $(".music").length;
    var songUrl = ($("#u" + (num -1)).attr("href"));
    var songTitle = ($("#s" + (num -1)).text());
    var songArtist = ($("#a" + (num -1)).text());
    var songInfo = '<a href="' + songUrl + '&amp;at=10ldcR" rel="nofollow" target="_blank">★' + songTitle + ' - ' + songArtist + '</a><br />'
    $('#fav').append(songInfo);
  });
};
