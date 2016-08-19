function hook(str, args) {

    if (str[0] == "~") {
        eval(str.slice(1, str.length))
        return true
    }

    if (hookCommands.indexOf(str) > -1) {
        //call it as a function
        window[str](args);
        return true;
    }

}

//==================== CHALLENGE COMMANDS ==========================
var hookCommands = ["start"];

function start(str) {
    var github = "https://github.com/adriangarza/code2040";
    var token = "0cd6f780d84211209711168429d70d68";
    var endpoint = "http://challenge.code2040.org/api/register";
    print("connecting to endpoint " + endpoint)
    $.ajax({
        type: "POST",
        async: false,
        url: endpoint,
        processData: false,
        data: JSON.stringify({"token": token, "github": github}),
        dataType: "json",
        contentType: "application/json",
        success: function(data){
            print("success!")
            return data;
        }
    })
}
