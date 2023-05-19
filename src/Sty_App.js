import styled from 'styled-components'

const Styling =styled.section`

.main{
    padding: 5%;
}

.Stopwatch{
width:100%;
background-color: lightgray;
padding: 2%;
}

.function{
    width: 100%;
    min-height: 100px;
    padding: 2%;
}

button{
    background-color: white;
    border: none;
    border-radius: 50%;
    padding: 2%;
    margin: 2%;
    font-size: 14px ;
}

.enable_split{
background-color: orange;
color: white;
border: none;
}

.enable_reset{
   background-color: blue;
   color: white;
   border: none;
}

.disable_split,.disable_reset{
background-color: lightgray;
color: silver;
border: 1px solid silver;
}

.time{
    height: 100px;
    font-size: 100px;
    text-align: center;
}

.time_split{
    font-size: 30px;
    padding: 2%;
    color: orange;
}

.Start{
background-color: green;
color: white;
}

.Pause{
background-color: red;
color: white;
}

table{
    width: 100%;
}

.Split_td{
text-align: left;
}

.Pause_td{
   text-align: left;
   
}


.Split_cl{
color: orange;
}

.Pause_cl{
    color: red;
}

.state,.id{
    color: silver;
}
`

export default Styling