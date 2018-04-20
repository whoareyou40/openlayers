//第一步上传FTP
function step1() {

    setState(2);
    var baseurl = "file:data/tif/";
   // var fileName = $("#aa").val().replace(/\\/g, "");
   // layerName=layerName.replace(new RegExp(/(：)/g),"");
   // layerName = layerName.replace(/fakepath/,"");
    
 //   var file = $("#file").val();
 //   var fileName = file.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi, "$1");

 //   var arr = file.split('\\');//注split可以用字符或字符串分割
 //   var my = arr[arr.length - 1];//这就是要取得的图片名称
  //  alert(my);
  //  var fileName = $("#aa").val();
  //  var layerName = getFileName(layerName);


   // $("#dataName").attr("value", layerName);
 //   $("#layerName").attr("value", layerName);
    var fileName = $("#fileName").val();
    $("#url").attr("value", baseurl + fileName);

    var dataName = fileName.substring(0, fileName.lastIndexOf('\.'));
    //  alert(baseurl + fileName);
    // alert(dataName);
    $("#dataName").attr("value", dataName);
    $("#url").attr("value", baseurl + fileName);
    $("#layerName").attr("value", dataName);
    
}
//第二步 新增数据
function step2() {

    //     var data = "<coverageStore>\n  <name>arcGridSample</name>\n  <description>Sample ASCII GRID coverage of Global rainfall.</description>\n  <type>ArcGrid</type>\n  <enabled>true</enabled>\n  <workspace>\n    <name>nurc</name>\n    <atom:link xmlns:atom=\"http://www.w3.org/2005/Atom\" rel=\"alternate\" href=\"http://localhost:8080/geoserver/rest/workspaces/nurc.xml\" type=\"application/xml\"/>\n  </workspace>\n  <__default>false</__default>\n  <url>file:coverages/arc_sample/precip30min.asc</url>\n  <coverages>\n    <atom:link xmlns:atom=\"http://www.w3.org/2005/Atom\" rel=\"alternate\" href=\"http://localhost:8080/geoserver/rest/workspaces/nurc/coveragestores/arcGridSample/coverages.xml\" type=\"application/xml\"/>\n  </coverages>\n</coverageStore>      \n"
    var data = "<coverageStore>" +
               "<workspace>" +
               "<name>shanghai</name>" +
               "<link>http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai.xml</link>" +
               "</workspace>" +
               "<name>" + $("#dataName").val() + "</name>" +
               "<type>GeoTIFF</type>" +
               "<enabled>true</enabled>" +
               "<url>" + $("#url").val() + "</url>" +
               "</coverageStore>";

    $.ajax({
        url: "http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai/coveragestores",
        type: "POST",
        contentType: "application/xml",
        data: data,
        success: function (data) {  setState(3); },
        error: function (error) {
            alert("出错：" + error.responseText);
          //  setState(1);

           
        }
    });
}
//第三步：发布图层
function step3() {
        var pro = new Array();
        pro[0] = "PROJCS[\"WGS 84 / Pseudo-Mercator\", \n GEOGCS[\"WGS 84\", \n   DATUM[\"World Geodetic System 1984\", \n  SPHEROID[\"WGS 84\", 6378137.0, 298.257223563, AUTHORITY[\"EPSG\",\"7030\"]], \n     AUTHORITY[\"EPSG\",\"6326\"]], \n  PRIMEM[\"Greenwich\", 0.0, AUTHORITY[\"EPSG\",\"8901\"]], \n  UNIT[\"degree\", 0.017453292519943295], \n   AXIS[\"Geodetic longitude\", EAST], \n  AXIS[\"Geodetic latitude\", NORTH], \n   AUTHORITY[\"EPSG\",\"4326\"]], \n  PROJECTION[\"Popular Visualisation Pseudo Mercator\", AUTHORITY[\"EPSG\",\"1024\"]], \n  PARAMETER[\"semi_minor\", 6378137.0], \n  PARAMETER[\"latitude_of_origin\", 0.0], \n  PARAMETER[\"central_meridian\", 0.0], \n  PARAMETER[\"scale_factor\", 1.0], \n  PARAMETER[\"false_easting\", 0.0], \n  PARAMETER[\"false_northing\", 0.0], \n  UNIT[\"m\", 1.0], \n  AXIS[\"Easting\", EAST], \n  AXIS[\"Northing\", NORTH], \n  AUTHORITY[\"EPSG\",\"3857\"]]";
        pro[1] = "GEOGCS[\"WGS 84\", \n DATUM[\"World Geodetic System 1984\", \n SPHEROID[\"WGS 84\", 6378137.0, 298.257223563, AUTHORITY[\"EPSG\",\"7030\"]], \n AUTHORITY[\"EPSG\",\"6326\"]], \n PRIMEM[\"Greenwich\", 0.0, AUTHORITY[\"EPSG\",\"8901\"]], \n UNIT[\"degree\", 0.017453292519943295], \n AXIS[\"Geodetic longitude\", EAST], \n AXIS[\"Geodetic latitude\", NORTH], \n AUTHORITY[\"EPSG\",\"4326\"]]";
        pro[2] = "GEOGCS[\"Beijing 1954\", DATUM[\"Beijing 1954\", SPHEROID[\"Krassowsky 1940\", 6378245.0, 298.3, AUTHORITY[\"EPSG\",\"7024\"]], TOWGS84[15.8, -154.4, -82.3, 0.0, 0.0, 0.0, 0.0], AUTHORITY[\"EPSG\",\"6214\"]], PRIMEM[\"Greenwich\", 0.0, AUTHORITY[\"EPSG\",\"8901\"]], UNIT[\"degree\", 0.017453292519943295], AXIS[\"Geodetic longitude\", EAST],  AXIS[\"Geodetic latitude\", NORTH],   AUTHORITY[\"EPSG\",\"4214\"]]";

    
        pro[3] = "GEOGCS[\"Xian 1980\",  DATUM[\"Xian 1980\",  SPHEROID[\"IAG 1975\", 6378140.0, 298.257, AUTHORITY[\"EPSG\",\"7049\"]], AUTHORITY[\"EPSG\",\"6610\"]], PRIMEM[\"Greenwich\", 0.0, AUTHORITY[\"EPSG\",\"8901\"]], UNIT[\"degree\", 0.017453292519943295], AXIS[\"Geodetic longitude\", EAST],  AXIS[\"Geodetic latitude\", NORTH],  AUTHORITY[\"EPSG\",\"4610\"]]";
        
        //添加图层

              

        //  alert( $("#cs").val());
        var checkIndex = $("#cs").get(0).selectedIndex;
        // alert(checkIndex);


        //     var data = "<coverageStore>\n  <name>arcGridSample</name>\n  <description>Sample ASCII GRID coverage of Global rainfall.</description>\n  <type>ArcGrid</type>\n  <enabled>true</enabled>\n  <workspace>\n    <name>nurc</name>\n    <atom:link xmlns:atom=\"http://www.w3.org/2005/Atom\" rel=\"alternate\" href=\"http://localhost:8080/geoserver/rest/workspaces/nurc.xml\" type=\"application/xml\"/>\n  </workspace>\n  <__default>false</__default>\n  <url>file:coverages/arc_sample/precip30min.asc</url>\n  <coverages>\n    <atom:link xmlns:atom=\"http://www.w3.org/2005/Atom\" rel=\"alternate\" href=\"http://localhost:8080/geoserver/rest/workspaces/nurc/coveragestores/arcGridSample/coverages.xml\" type=\"application/xml\"/>\n  </coverages>\n</coverageStore>      \n"
        var data = {
            "coverage": {

                "dimensions": {
                    "coverageDimension": [
                      {
                          "description": "GridSampleDimension[-9.999999933815813E36,-9.999999933815813E36]",
                          "name": "GRAY_INDEX",
                          "range": {
                              "max": -9.999999933815813e+36,
                              "min": -9.999999933815813e+36
                          }
                      }
                    ]
                },
                "enabled": true,
                "grid": {
                    "@dimension": "2",
                    "crs": $("#cs").val(),
                    "range": {
                        "high": "634 477",
                        "low": "0 0"
                    },
                    "transform": {
                        "scaleX": 30,
                        "scaleY": -30,
                        "shearX": 0,
                        "shearY": 0,
                        "translateX": 589995,
                        "translateY": 4927995
                    }
                },
                "interpolationMethods": {
                    "string": [
                      "nearest neighbor",
                      "bilinear",
                      "bicubic"
                    ]
                },
                "keywords": {
                    "string": [
                      "WCS",
                      "sfdem",
                      "sfdem",
                      "type\\@language=fr\\;\\@vocabulary=test\\;"
                    ]
                },
                "latLonBoundingBox": {
                    "crs": "EPSG:4326",
                    "maxx": 118.1669121184793,
                    "maxy": 24.670208683915014,
                    "minx": 118.1530050075355,
                    "miny": 24.660939550976412
                },
                "metadata": {
                    "entry": [
                      {
                          "@key": "elevation",
                          "dimensionInfo": {
                              "enabled": false
                          }
                      },
                      {
                          "$": "10",
                          "@key": "cacheAgeMax"
                      },
                      {
                          "@key": "time",
                          "dimensionInfo": {
                              "defaultValue": "",
                              "enabled": false
                          }
                      },
                      {
                          "$": "true",
                          "@key": "cachingEnabled"
                      },
                      {
                          "$": "sfdem_sfdem",
                          "@key": "dirName"
                      }
                    ]
                },
                "name": $("#layerName").val(),
                "namespace": {
                    "href": "http://192.168.1.201:8080/geoserver/rest/namespaces/sf.json",
                    "name": "sf"
                },
                "nativeBoundingBox": {
                    "crs": {
                        "$": $("#cs").val(),
                        "@class": "projected"
                    },
                    "maxx": 13154280.485642625,
                    "maxy": 2835291.2337961043,
                    "minx": 13152732.353133954,
                    "miny": 2834155.8006814974
                },
                "nativeCRS": {
                    "$": pro[checkIndex],
                    "@class": "projected"
                },
                "nativeFormat": "GeoTIFF",
                "nativeName": $("#layerName").val(),

                "srs": "EPSG:3857",
                "store": {
                    "@class": "coverageStore",
                    "href": "http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai/coveragestores/" + $("#layerName").val() + ".json",
                    "name": "shanghai:" + $("#layerName").val()
                },
                "supportedFormats": {
                    "string": [
                      "ARCGRID",
                      "IMAGEMOSAIC",
                      "GTOPO30",
                      "GEOTIFF",
                      "GIF",
                      "PNG",
                      "JPEG",
                      "TIFF"
                    ]
                },
                "title": $("#layerName").val()
            }
        };

        //    var data = JSON.stringify(data);


        $.ajax({
            url: "http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai/coveragestores/test/coverages",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) { setState(4); },
            error: function (error) {
                alert("出错：" + error.responseText);
            }
        });

}
function setState(i) {
    var wizard = $('#fuelux-wizard-container').data('fu.wizard')
    wizard.currentStep = i;
    wizard.setState();
}

$(document).ready(function () {


    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    // alert(year);
    var layerName = year + month + day;
    var dataName = year + month + day;

    var baseurl = "file:data/tif/";

  //  $("#dataName").attr("value", layerName);
 //   $("#layerName").attr("value", layerName);

 //   $("#url").attr("value", baseurl + layerName + ".tif");

    $("#Button1").click(function () {



        $.ajax({
            type: "get",
            contentType: "application/xml",
            url: "http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai/coveragestores",
            success: function (data) {
                // alert(data.Value);
                setState(4);
            },
            error: function (error) {
                alert("出错：" + error.responseText);
            }
        });
    });




    var pro = new Array();
    pro[0] = "PROJCS[\"WGS 84 / Pseudo-Mercator\", \n GEOGCS[\"WGS 84\", \n   DATUM[\"World Geodetic System 1984\", \n  SPHEROID[\"WGS 84\", 6378137.0, 298.257223563, AUTHORITY[\"EPSG\",\"7030\"]], \n     AUTHORITY[\"EPSG\",\"6326\"]], \n  PRIMEM[\"Greenwich\", 0.0, AUTHORITY[\"EPSG\",\"8901\"]], \n  UNIT[\"degree\", 0.017453292519943295], \n   AXIS[\"Geodetic longitude\", EAST], \n  AXIS[\"Geodetic latitude\", NORTH], \n   AUTHORITY[\"EPSG\",\"4326\"]], \n  PROJECTION[\"Popular Visualisation Pseudo Mercator\", AUTHORITY[\"EPSG\",\"1024\"]], \n  PARAMETER[\"semi_minor\", 6378137.0], \n  PARAMETER[\"latitude_of_origin\", 0.0], \n  PARAMETER[\"central_meridian\", 0.0], \n  PARAMETER[\"scale_factor\", 1.0], \n  PARAMETER[\"false_easting\", 0.0], \n  PARAMETER[\"false_northing\", 0.0], \n  UNIT[\"m\", 1.0], \n  AXIS[\"Easting\", EAST], \n  AXIS[\"Northing\", NORTH], \n  AUTHORITY[\"EPSG\",\"3857\"]]";
    pro[1] = "GEOGCS[\"WGS 84\", \n DATUM[\"World Geodetic System 1984\", \n SPHEROID[\"WGS 84\", 6378137.0, 298.257223563, AUTHORITY[\"EPSG\",\"7030\"]], \n AUTHORITY[\"EPSG\",\"6326\"]], \n PRIMEM[\"Greenwich\", 0.0, AUTHORITY[\"EPSG\",\"8901\"]], \n UNIT[\"degree\", 0.017453292519943295], \n AXIS[\"Geodetic longitude\", EAST], \n AXIS[\"Geodetic latitude\", NORTH], \n AUTHORITY[\"EPSG\",\"4326\"]]"
    //添加图层
    $("#Button3").click(function () {



        //  alert( $("#cs").val());
        var checkIndex = $("#cs").get(0).selectedIndex;
        // alert(checkIndex);


        //     var data = "<coverageStore>\n  <name>arcGridSample</name>\n  <description>Sample ASCII GRID coverage of Global rainfall.</description>\n  <type>ArcGrid</type>\n  <enabled>true</enabled>\n  <workspace>\n    <name>nurc</name>\n    <atom:link xmlns:atom=\"http://www.w3.org/2005/Atom\" rel=\"alternate\" href=\"http://localhost:8080/geoserver/rest/workspaces/nurc.xml\" type=\"application/xml\"/>\n  </workspace>\n  <__default>false</__default>\n  <url>file:coverages/arc_sample/precip30min.asc</url>\n  <coverages>\n    <atom:link xmlns:atom=\"http://www.w3.org/2005/Atom\" rel=\"alternate\" href=\"http://localhost:8080/geoserver/rest/workspaces/nurc/coveragestores/arcGridSample/coverages.xml\" type=\"application/xml\"/>\n  </coverages>\n</coverageStore>      \n"
        var data = {
            "coverage": {

                "dimensions": {
                    "coverageDimension": [
                      {
                          "description": "GridSampleDimension[-9.999999933815813E36,-9.999999933815813E36]",
                          "name": "GRAY_INDEX",
                          "range": {
                              "max": -9.999999933815813e+36,
                              "min": -9.999999933815813e+36
                          }
                      }
                    ]
                },
                "enabled": true,
                "grid": {
                    "@dimension": "2",
                    "crs": $("#cs").val(),
                    "range": {
                        "high": "634 477",
                        "low": "0 0"
                    },
                    "transform": {
                        "scaleX": 30,
                        "scaleY": -30,
                        "shearX": 0,
                        "shearY": 0,
                        "translateX": 589995,
                        "translateY": 4927995
                    }
                },
                "interpolationMethods": {
                    "string": [
                      "nearest neighbor",
                      "bilinear",
                      "bicubic"
                    ]
                },
                "keywords": {
                    "string": [
                      "WCS",
                      "sfdem",
                      "sfdem",
                      "type\\@language=fr\\;\\@vocabulary=test\\;"
                    ]
                },
                "latLonBoundingBox": {
                    "crs": "EPSG:4326",
                    "maxx": 118.1669121184793,
                    "maxy": 24.670208683915014,
                    "minx": 118.1530050075355,
                    "miny": 24.660939550976412
                },
                "metadata": {
                    "entry": [
                      {
                          "@key": "elevation",
                          "dimensionInfo": {
                              "enabled": false
                          }
                      },
                      {
                          "$": "10",
                          "@key": "cacheAgeMax"
                      },
                      {
                          "@key": "time",
                          "dimensionInfo": {
                              "defaultValue": "",
                              "enabled": false
                          }
                      },
                      {
                          "$": "true",
                          "@key": "cachingEnabled"
                      },
                      {
                          "$": "sfdem_sfdem",
                          "@key": "dirName"
                      }
                    ]
                },
                "name": $("#layerName").val(),
                "namespace": {
                    "href": "http://192.168.1.201:8080/geoserver/rest/namespaces/sf.json",
                    "name": "sf"
                },
                "nativeBoundingBox": {
                    "crs": {
                        "$": $("#cs").val(),
                        "@class": "projected"
                    },
                    "maxx": 13154280.485642625,
                    "maxy": 2835291.2337961043,
                    "minx": 13152732.353133954,
                    "miny": 2834155.8006814974
                },
                "nativeCRS": {
                    "$": pro[checkIndex],
                    "@class": "projected"
                },
                "nativeFormat": "GeoTIFF",
                "nativeName": $("#layerName").val(),

                "srs": "EPSG:3857",
                "store": {
                    "@class": "coverageStore",
                    "href": "http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai/coveragestores/" + $("#layerName").val() + ".json",
                    "name": "shanghai:" + $("#layerName").val()
                },
                "supportedFormats": {
                    "string": [
                      "ARCGRID",
                      "IMAGEMOSAIC",
                      "GTOPO30",
                      "GEOTIFF",
                      "GIF",
                      "PNG",
                      "JPEG",
                      "TIFF"
                    ]
                },
                "title": $("#layerName").val()
            }
        };

        //    var data = JSON.stringify(data);


        $.ajax({
            url: "http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai/coveragestores/test/coverages",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) { alert("图层添加成功"); },
            error: function (error) {
                alert("出错：" + error.responseText);
            }
        });
    });






});


