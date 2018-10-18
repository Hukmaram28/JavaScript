var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

for(let i=0;i<myObj.length;i++){
    if(myObj[i].occupation=="Programmer")
    {
        console.log("name: " + myObj[i].name + ", age: " + myObj[i].age + ", occupation: " + myObj[i].occupation + ", ");
    }
}
function compare_to_sort(x,y){
    if (y.age < x.age)
      return -1;
    if (y.age > x.age)
      return 1;
    return 0;
   }
   
   console.log(myObj.sort(compare_to_sort));
var TeamLeader=[];
var Programmer=[];
var object=[];

   for(let i=0;i<myObj.length;i++){
    if(myObj[i].occupation=="Team Leader")
    {
        TeamLeader.push({'name':myObj[i].name, 'age':myObj[i].age });
    }}
    for(let i=0;i<myObj.length;i++){
        if(myObj[i].occupation=="Programmer")
        {
            Programmer.push({'name':myObj[i].name, 'age':myObj[i].age });
    }}
    object.push(TeamLeader);
    object.push(Programmer)
    console.log(object);

      var nameInMyObj = myObj.map(function (myObj) {
        return myObj.name;
       });
       console.log(nameInMyObj);