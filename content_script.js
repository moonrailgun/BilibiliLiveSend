/**
 * Created by Chen on 2016-05-10.
 */
$(function () {
    var sendDanmuOnce = function (msg) {
        var color = '0xffffff';//默认颜色
        if (msg != '') {
            msg = $.trim(msg);//去除首尾空格
            $("#player_object")[0].sendMsg(msg, color);//调用播放器的方法发送弹幕
            console.log("弹幕消息发送完毕");
        } else {
            console.log("弹幕消息内容为空");
        }
    };

    var restDanmuTaskNum = 0;
    var sendDanmuMultipleTimes = function (msg) {
        setTimeout(function () {
            sendDanmuOnce(msg);
            restDanmuTaskNum--;
            if (restDanmuTaskNum > 0) {
                sendDanmuMultipleTimes(msg);//迭代
            }

        }, 200);
    };

    var addHtml = function () {
        var content = '';
        content += '<div class="clear-float danmu-sender" style="width: 300px;">' +
            '<textarea class="danmu-textbox float-left bls-sendInput" spellcheck="false" placeholder="请输入弹幕DA☆ZE～" maxlength="20"></textarea>' +
            '<button class="danmu-send-btn float-right live-btn default bls-sendOnce" role="button" aria-label="点击发送弹幕" style="width: 55px;">发送一次</button></div>';

        content += '<div class="clear-float danmu-sender" style="width:300px;">' +
            '<input type="number" class="danmu-textbox float-left bls-sendMultipleTimes" placeholder="连续发送多少次DA☆ZE～" style="height: auto;"/>' +
            '<button class="danmu-send-btn float-right live-btn default bls-sendMultiple" role="button" aria-label="点击发送弹幕" style="width: 55px;height: auto;">连续发送</button></div>';


        var html = '<div id="bls" class="main-section room-intro" ms-controller="roomIntroCtrl"><div class="section-header clear-float">' +
            '<h2 class="section-title">B站直播刷屏姬 - BilibiliLiveSend</h2></div><div class="content-container" ms-html="roomIntro">' +
            '<p>' + content + '</p></div></div>';

        $('.room-intro:last').before(html);
    };


    addHtml();
    $('#bls .bls-sendOnce').click(function () {
        var msg = $('#bls .bls-sendInput').val();
        sendDanmuOnce();
    });
    $('#bls .bls-sendMultiple').click(function () {
        var times = $('#bls .bls-sendMultipleTimes').val();
        var msg = $('#bls .bls-sendInput').val() || 0;
        times = Number(times);
        restDanmuTaskNum = times;
        sendDanmuMultipleTimes(msg);
    });

    console.log("BilibiliLiveSend 正在运行");
});