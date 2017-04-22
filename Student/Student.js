/**
 * Created by a on 19.11.2016.
 */

Student();
function Student() {
    var url = "http://127.0.0.1:8081";



    Student.buttonOnclick=function(id,path,divId,token) {

        $("#"+id).click(function () {
            var obj={
                currentToken:token
            };
            Student.sendRequest(path,obj,divId);

        })

    };


    Student.sendRequest=function(path, obj, divId) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;
                if (xhr.response == "/getSchedule") {
                    if (xhr.response == "error") {
                        console.log("ERROR!!!")
                    } else {
                        Student.tableSchedule(JSON.parse(xhr.response), divId)

                    }
                }
                else if (path == "/schedule") {
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

            xhr.open("POST", url + path, true);
            xhr.send(JSON.stringify(obj));

        };


        Student.fillStartTable=function() {

        };

        Student.tableSchedule=function(days, divId) {

            var scheduleTable = {

                sunTime0: days.days[0].lessons[0].time,
                sunSubj0: days.days[0].lessons[0].subject,
                sunTeacher0: days.days[0].lessons[0].teacher,
                sunClassRoom0: days.days[0].lessons[0].classRoom,

                sunTime1: days.days[0].lessons[1].time,
                sunSubj1: days.days[0].lessons[1].subject,
                sunTeacher1: days.days[0].lessons[1].teacher,
                sunClassRoom1: days.days[0].lessons[1].classRoom,

                monTime0: days.days[1].lessons[0].time,
                monSubj0: days.days[1].lessons[0].subject,
                monTeacher0: days.days[1].lessons[0].teacher,
                monClassRoom0: days.days[1].lessons[0].classRoom,

                monTime1: days.days[1].lessons[1].time,
                monSubj1: days.days[1].lessons[1].subject,
                monTeacher1: days.days[1].lessons[1].teacher,
                monClassRoom1: days.days[1].lessons[1].classRoom

            };

            $("#container").load("./Student.html", function () {
                var tbl = document.getElementById(divId);
                tbl.rows[0].cells[0].innerText = scheduleTable.sunTime0;
                tbl.rows[0].cells[1].innerHTML = scheduleTable.sunSubj0 + "<br>" + scheduleTable.sunTeacher0 + "<br>" + scheduleTable.sunClassRoom0;
                tbl.rows[1].cells[0].innerText = scheduleTable.sunTime1;
                tbl.rows[1].cells[1].innerHTML = scheduleTable.sunSubj1 + "<br>" + scheduleTable.sunTeacher1 + "<br>" + scheduleTable.sunClassRoom1;
                tbl.rows[0].cells[2].innerText = scheduleTable.monTime0;
                tbl.rows[0].cells[3].innerHTML = scheduleTable.monSubj0 + "<br>" + scheduleTable.monTeacher0 + "<br>" + scheduleTable.monClassRoom0;
                tbl.rows[1].cells[2].innerText = scheduleTable.monTime1;
                tbl.rows[1].cells[3].innerHTML = scheduleTable.monSubj1 + "<br>" + scheduleTable.monTeacher1 + "<br>" + scheduleTable.monClassRoom1;


            });


        }

        Student.fillAttendance=function() {

        };

        Student.fillPayments=function() {

        }



};

