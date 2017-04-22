/**
 * Created by a on 19.11.2016.
 */

Student();
function Student() {


    Student.studentPage=function (token) {

        var obj = {
            currentToken: token
        };
        $.getScript("imports/jquery-3.1.1.min.js");
        $.getScript("student.js");


        $("#container").load("./student.html", function () {
            Student.sendRequest("/get/scheduler",obj,"tbl");
            Student.buttonOnclick("schedule","/get/scheduler","tbl",obj);
            Student.buttonOnclick("attendance","/get/scheduler","tbl",obj);
            Student.buttonOnclick("payments","/payments",obj);
    })};


    Student.buttonOnclick=function(id, path, divId,obj) {  /*id- button id, divId- table id*/

        $("#" + id).click(function () {

            Student.sendRequest(path, obj, divId);

        })

    };


    Student.sendRequest=function(path, obj, divId) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4 ) return;
            if (path == "/get/scheduler") {
                if (xhr.response == "error") {
                    console.log("ERROR SCHEDULE")
                }
                /*it will be JSON*/
                else {

                    /*document.body.appendChild(fillSchedule(JSON.parse(xhr.response)));*/
                    Student.tableSchedule(JSON.parse(xhr.response), divId)

                }
            }
            else if (path == "/attendance") {
                if (xhr.response == "error") {
                    console.log("ERROR ATTENDNCE")
                }
                /*it will be JSON*/
                else {
                    var ttt = JSON.parse(xhr.response);
                    console.log(ttt);
                    /*document.body.appendChild(setTable(JSON.parse(xhr.response)));*/
                }

            }
            else if (path == "/payments") {
                if (xhr.response == "error") {
                    console.log("ERROR PAYMENTS")
                }
                /*it will be JSON*/
                else {
                    var ttt = JSON.parse(xhr.response);
                    console.log(ttt);
                    /*document.body.appendChild(setTable(JSON.parse(xhr.response)));*/
                }

            }


        };

        xhr.open("POST", path,true);
        xhr.send(JSON.stringify(obj));

    };


    Student.fillStartTabel=function() {

    };

    Student.tableSchedule=function(days, divId) {
        console.log(days);

        var tbl = document.getElementById(divId);
        for(var i=0;i<=1;i++){
            tbl.rows[i].cells[0].innerHTML = days[i].date +"<br>"+ days[i].time;
            tbl.rows[i].cells[1].innerHTML =days[i].course + "<br>" + days[i].teacherLastName + "<br>" + days[i].teacherName + "<br>" + "auditory: " + days[i].auditory;

        }
    };

    Student.fillAttendance=function() {

    };

    Student.fillPayments=function() {

    };

}