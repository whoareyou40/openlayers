var jsondata;
var cjson = {};

$.ajax({
    type: "get",
    contentType: "application/json",
    url: "http://192.168.1.108:8080/geoserver/rest/workspaces/shanghai/coveragestores",

    success: function (json) {
        var json_source = json.coverageStores;
        json_source = json_source.coverageStore

        initTable(json_source);



    },
    error: function (error) {
        alert("出错：" + error.responseText);
    }
});

function initTable(json_source) {
    var html = '<table border=1>';
    html += "<tr><td>影像图名称</td><td>发布日期</td><td>操作</td>"
    for (var j in json_source) {
        var obj = json_source[j];
        html += '<tr>'
        html += '<td>shanghai:' + obj.name + '</td>';
        html += '<td>' + obj.name + '</td>';
        html += '<td><a href="priview.html?layername=' + obj.name + '">查看</a> <a href="#" onClick=deleteData(' + obj.name + ')>删除</a></td>';
        html += '</tr>'
    }
    html += '</table>';

    $('#container').append(html);
}


function deleteData(name) {
    if (confirm("确定删除数据?")) {


        $.ajax({
            type: "delete",
            contentType: "application/json",
            url: "http://192.168.1.108:8080/geoserver/rest/workspaces/shanghai/coveragestores/" + name + "?recurse=true",
            success: function (data) {
                alert("数据删除成功");
                location.reload();
            },
            error: function (error) {
                alert("出错：" + error.responseText);
            }
        });
    }
    else {

    }
}