$(function () {
    $(".content").on("click", "#authenticate", function () {
        var auth = {
            "username": $("#username").val(),
            "password": $("#password").val(),
            "auth_key": $("#auth_key").val()
        };
        Helpers.replaceContent(auth, "auth");
        Api.authorize(auth);
    });
    Helpers.highlightVariables();
});

var host = 'https://api.newsletter2go.com';
var accessToken;

var Helpers = {
    replaceContent: function (data, resource) {
        var content = $(".content").html();
        $.each(data, function (key, value) {
            var replace = "(<span[^<]*?>){0,1}{{(<\/span>){0,1}" + resource + "." + key + "(<span[^<]*?>){0,1}}}(<\/span>){0,1}";
            var regex = new RegExp(replace, "g");
            content = content.replace(regex, value);
        });
        $(".content").html(content);
    },
    highlightVariables: function () {
        var content = $(".content").html();
        var replace = "(<span[^<]*?>){0,1}{{(<\/span>){0,1}([a-zA-Z._]*?)(<span[^<]*?>){0,1}}}(<\/span>){0,1}";
        var regex = new RegExp(replace, "g");
        content = content.replace(regex, "<span class='variable'>{{$3}}</span>");
        $(".content").html(content);
    }
};


var Api = {
    authorize: function (auth) {
        var authKey = "Basic " + btoa(auth.auth_key);
        var path = "/oauth/v2/token";
        var params = {
            "username": auth.username,
            "grant_type": "https://nl2go.com/jwt",
            "password": auth.password
        };
        var successCallback = function (data) {
            Helpers.replaceContent(data, "auth");
            accessToken = data.access_token;
            alert("You have successfully authenticated your account");
            Api.makeCall(null, "GET", "/companies", {}, "company")
        };
        var errorCallback = function () {
            alert("Please check your credentials");
        };
        Api.xhr("POST", path, params, successCallback, errorCallback, authKey);
    },
    makeCall: function (ele, method, path, params, resource) {
        params = params || {};
        var successCallback = function (data) {
            if (ele) {
                var code = $(peacock.highlight(JSON.stringify(data, null, 4))).find("pre").html();
                $(ele).parent().siblings(".tab-json--response").first().html("<code>" + code + "</code>");
            }
            Helpers.replaceContent(data.value[0], resource);
        };
        Api.xhr(method, path, params, successCallback);
    },
    xhr: function (method, path, params, successCallback, errorCallback, auth) {

        errorCallback = errorCallback || function () {
            };
        successCallback = successCallback || function () {
            };

        var xhr = new XMLHttpRequest();
        var url = host + path;
        xhr.open(method, url, true);
        if (auth) {
            xhr.setRequestHeader("Authorization", auth);
        }
        else {
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
        }
        xhr.crossDomain = true;
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status.toString().substr(0, 1) === "2") {
                    successCallback(JSON.parse(xhr.responseText || "{}"));
                } else {
                    errorCallback(JSON.parse(xhr.responseText || "{}"));
                }
            }
        };
        xhr.onerror = function (e) {
            errorCallback(JSON.parse(xhr.responseText || "{}"));
        };

        if (method == "GET") {
            xhr.send(null);
        }
        else {
            xhr.send(JSON.stringify(params));
        }
    }
};