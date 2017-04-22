/**
 * Created by dev on 3/15/17.
 */
app.controller('mainCtrl', function($scope) {
        $scope.empList = [
            {
                    nickName: "Name1-1",
                team:"team-1",
                contributions:"100.10"
            },
            {
                nickName: "Name2-1",
                team:"team-1",
                contributions:"100.20"
            },
            {
                nickName: "Name3-1",
                team:"team-1",
                contributions:"100.30"
            },


            {
                nickName: "Name2-1",
                team:"team-2",
                contributions:"200.10"
            },
            {
                nickName: "Name2-2",
                team:"team-2",
                contributions:"200.20"
            },
            {
                nickName: "Name2-3",
                team:"team-2",
                contributions:"200.30"
            },
            {
                nickName: "Name2-3",
                team:"team-2",
                contributions:"200.40"
            },


            {
                nickName: "Name3-1",
                team:"team-3",
                contributions:"300.10"
            },
            {
                nickName: "Name3-2",
                team:"team-3",
                contributions:"300.20"
            },
            {
                nickName: "Name3-3",
                team:"team-3",
                contributions:"300.30"
            }


        ];
        $scope.contrList = {};

        for (i=0;i<$scope.empList.length;i++){
            emp = $scope.empList[i];
            if ($scope.contrList[emp.team] == undefined){
                console.log(emp.team);
                $scope.contrList[emp.team] = {};
                $scope.contrList[emp.team].empCnt = 1;
                $scope.contrList[emp.team].contributions = (emp.contributions - 0)
            }
            else{
                $scope.contrList[emp.team].empCnt += 1;
                $scope.contrList[emp.team].contributions += (emp.contributions - 0)
            }
        }

        console.log($scope.contrList);
        $scope.contrListArray = [];
        for (contrib in $scope.contrList){
            var temp = {}
            temp['team'] = contrib;
            temp['empCnt'] = $scope.contrList[contrib].empCnt;
            temp['contributions'] = $scope.contrList[contrib].contributions;

            $scope.contrListArray.push(temp)
        }
        console.log($scope.contrListArray);


    });

