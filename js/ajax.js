var serve = 'http://39.99.132.46:8080';
var prefix = '/v1/manage';

function ajax (url, type, data, callback) {
    $.ajax({
        type: type,
        url: serve + prefix + url,
        dataType: "json",
        data: data,
        success: function (res) {
            if (res.success) {
                callback(res);
            } else {
                console.log('请求错误');
            }
        }
    })
}
