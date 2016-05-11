/**
 * Created by Chen on 2016-05-10.
 */

console.log("BilibiliLiveSend 正在运行");

var sendDanmuOnce = function(){

};

var addHtml = function() {
    var content = '';
    content += '<div class="clear-float danmu-sender" style="width: 300px;">' +
        '<textarea class="danmu-textbox float-left bls-sendInput" spellcheck="false" placeholder="请输入弹幕DA☆ZE～" maxlength="20"></textarea>' +
        '<button class="danmu-send-btn float-right live-btn default bls-sendOnce" role="button" aria-label="点击发送弹幕" style="width: 55px;">发送一次</button></div>';

    var html = '<div id="bls" class="main-section room-intro" ms-controller="roomIntroCtrl"><div class="section-header clear-float">' +
        '<h2 class="section-title">B站直播刷屏姬 - BilibiliLiveSend</h2></div><div class="content-container" ms-html="roomIntro">' +
        '<p>'+content+'</p></div></div>';

    $('.room-intro:last').before(html);
};

addHtml();

$(function(){
    console.log($('#bls .bls-sendOnce'));
    $('#bls .bls-sendOnce').click(function(){
        var msg = $('#bls .bls-sendInput').val();
        var rnd = Math.round(new Date().getTime()/1000);
        //var data = 'color=16777215&fontsize=25&mode=1&msg=%E4%B8%87%E4%B8%80%E4%B8%AD%E4%BA%86%E5%91%A2&rnd=1462888732&roomid=5440';
        /*
        $.post('http://live.bilibili.com/msg/send',{
            color:16777215,
            fontsize:25,
            mode:1,
            msg:msg,
            rnd:rnd,
            roomid:5440
        }, function(data,status){
            console.log(data);
        })*/
    });
});