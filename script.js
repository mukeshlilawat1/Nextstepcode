*{
    margin: 0;
    padding: 0;
}

body{
    background-color: #282828;
}

.nav-bar .nav ul{
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
    /* border: 2px solid red; */
}

.nav-bar .nav ul .left{
display: flex;
align-items: center;
width:40%;
overflow: hidden;
}

.nav-bar .nav{
    background-color: white;
}

.nav-bar .nav ul .left li:nth-child(1){
height: 50px;
width: 50px;
}

.nav-bar .nav ul .left li:nth-child(1) img{
    width: 100%;
}

.nav-bar .nav ul .left li{
    margin-left: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bolder;
    cursor: pointer;
    /* border: 2px solid red; */
    padding: 2%;
    height: 100%;
    display: flex;
    align-items: center;
    width: 120px;
    justify-content: center;
}

.nav-bar .nav ul .left li:nth-child(1){
    height: 50px;
    width: 50px;
    margin-left: 0%;
    display: flex;
    align-items: center;
}

.nav-bar .nav ul .left li:hover{
    background-color: rgb(9, 200, 31);
    color: white;
    transition-duration: 0.3s;
}

.nav-bar .nav ul .left li:nth-child(1):hover{
    background-color:transparent ;
}


.nav-bar .nav .right{
width: 60%;
display: flex;
justify-content: right;
}


.nav-bar .nav .right .icon{
    display: flex;
    align-items: center;
    height: 100%;
    width: 30%;
    /* border: 2px solid red; */
    justify-content: center;
}

.nav-bar .nav .right .icon li{
    margin-left:5% ;
}

.nav-bar .nav .right .buttons{
    display: flex;
    align-items: center;
}
.nav-bar .nav .right .buttons button{
    height: 45px;
    margin-right:2% ;
    width: 150px;
    border-radius: 75px 75px;
    font-family: open sans-serif;
    font-weight:bolder;
    color: white;
    border: none;
    outline: none;
}

.nav-bar .nav .right .buttons button:nth-child(1){
    width: 80px;
    background-color: #282a35;
}
.nav-bar .nav .right .buttons button:nth-child(2){
    background-color: #ffb3bb;
    color: black;
}
.nav-bar .nav .right .buttons button:nth-child(3){
    background-color:#fff080;
    color: black;
}

.nav-bar .nav .right .buttons button:last-child{
background-color: rgb(119, 228, 119);
color: black;
}
