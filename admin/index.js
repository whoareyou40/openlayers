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
        alert("����" + error.responseText);
    }
});

function initTable(json_source) {
    var html = '<table border=1>';
    html += "<tr><td>Ӱ��ͼ����</td><td>��������</td><td>����</td>"
    for (var j in json_source) {
        var obj = json_source[j];
        html += '<tr>'
        html += '<td>shanghai:' + obj.name + '</td>';
        html += '<td>' + obj.name + '</td>';
        html += '<td><a href="priview.html?layername=' + obj.name + '">�鿴</a> <a href="#" onClick=deleteData(' + obj.name + ')>ɾ��</a></td>';
        html += '</tr>'
    }
    html += '</table>';

    $('#container').append(html);
}


function deleteData(name) {
    if (confirm("ȷ��ɾ������?")) {


        $.ajax({
            type: "delete",
            contentType: "application/json",
            url: "http://192.168.1.108:8080/geoserver/rest/workspaces/shanghai/coveragestores/" + name + "?recurse=true",
            success: function (data) {
                alert("����ɾ���ɹ�");
                location.reload();
            },
            error: function (error) {
                alert("����" + error.responseText);
            }
        });
    }
    else {

    }
}