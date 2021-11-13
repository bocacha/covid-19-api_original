import {Link} from 'react-router-dom';
import axios from "axios";
import {useState,useEffect} from 'react';
//import style from './Home.module.css';
import {DataGrid} from '@mui/x-data-grid'
// import Card from './Card'

const columns = [
    // {field:'id', headerName:'ID',width:50},
    {field:'continent', headerName:'Continent',width:100},
    {field:'country', headerName:'Country',width:150},
    {field:'population', headerName:'Population',width:120,type:'number'},
    {field:'cases', headerName:'Cases',width:100,type:'number'},
    {field: 'deaths', headerName: 'Deaths',width:100,type:'number'},
];


export default function Home() {

    const [tableData, setTableData] = useState([]);
    const idTableData=[];

   
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
              'x-rapidapi-host': 'covid-193.p.rapidapi.com',
              'x-rapidapi-key': 'ce82a5b3d1msh7b183d31d72b664p1767e0jsn221840a2d9ae'
            }
          };
        //   console.log("Hice un get!!")
          axios.request(options).then(function (response) {
              setTableData(response.data.response);
          }).catch(function (error) {
              console.error(error);
          });   
    },[]);

    for(let i=0;i<tableData.length;i++){
        const myData={
            id:i,
            continent:tableData[i].continent,
            country:tableData[i].country,
            population:tableData[i].population,
            cases:tableData[i].cases.total,
            deaths:tableData[i].deaths.total
        }
        // if(tableData[i].continent !=="" && tableData[i].continent !== tableData[i].country && tableData[i].cases>0){
        //     idTableData.push(myData);
        // }
        if(tableData[i].continent !==null && tableData[i].population !==null){
            
            idTableData.push(myData);
        }
         
    }

    idTableData.sort( function( a, b ) {
        return a.continent < b.continent ? -1 : a.continent > b.continent ? 1 : 0;
    });

    return (
        <>
        <Link to="/">App</Link>
        <div style={{margin:100,height:700,width:'40%'}}>
            <DataGrid
                getRowId={(row) => row.id}                
                rows={idTableData}
                columns={columns}
                rowsPerPageOptions={[10]}
                pageSize={10}
                autoPageSize={true}
                disableColumnFilter={true}
                columnHeader--alignCenter
                // cell--textCenter
                // onRowClick={(row) => {
            />
        </div>
        </>
    )

//   function retrieveData() {
//     const options = {
//         method: 'GET',
//         url: 'https://covid-193.p.rapidapi.com/statistics',
//         headers: {
//           'x-rapidapi-host': 'covid-193.p.rapidapi.com',
//           'x-rapidapi-key': 'ce82a5b3d1msh7b183d31d72b664p1767e0jsn221840a2d9ae'
//         }
//     };
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//         setData(response.data.response);

//     }).catch(function (error) {
//         console.error(error);
//     });
//     }



//   return (
//     <div className={style.home}>
//         <h1>Covid-19 API</h1>
//         <Link to="/">App</Link>
//         <button onClick={retrieveData}>Retrieve Data</button>
//         <div className={style.data}>
//             {data.filter(item => (item.continent === "Africa")).map(item => (
                
//                 <div className={style.item} key={item.country}>
//                     <h6>{item.continent}</h6>
//                     <h6>{item.country}</h6>
//                     <h6>{item.population}</h6>
//                     <h6>{item.cases.total}</h6>
//                     <h6>{item.deaths.total}</h6>
//                 </div>
//             ))}
           
//         </div>
//     </div>    
//     );




}