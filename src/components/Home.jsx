import {Link} from 'react-router-dom';
import axios from "axios";
import {useState,useEffect} from 'react';
import style from './Home.module.css';
import {DataGrid} from '@mui/x-data-grid';

//Data Grid configuration
const columns = [
    {field:'continent', headerName:'Continent',width:250},
    {field:'country', headerName:'Country',width:300},
    {field:'population', headerName:'Population',width:200,type:'number'},
    {field:'cases', headerName:'Cases',width:200,type:'number'},
    {field: 'deaths', headerName: 'Deaths',width:200,type:'number'},
];


export default function Home() {

    const [tableData, setTableData] = useState([]);
    const idTableData=[];

    //Api call related to the data grid
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
              'x-rapidapi-host': 'covid-193.p.rapidapi.com',
              'x-rapidapi-key': 'ce82a5b3d1msh7b183d31d72b664p1767e0jsn221840a2d9ae'
            }
          };
          axios.request(options).then(function (response) {
              setTableData(response.data.response);
          }).catch(function (error) {
              console.error(error);
          });   
    },[]);
    //Adding index to the data grid
    for(let i=0;i<tableData.length;i++){
        const myData={
            id:i,
            continent:tableData[i].continent,
            country:tableData[i].country,
            population:tableData[i].population,
            cases:tableData[i].cases.total,
            deaths:tableData[i].deaths.total
        }
        //Avoiding null cases
        if(tableData[i].continent !==null && tableData[i].population !==null){
            
            idTableData.push(myData);
        }
         
    }
    //Ordering the data grid by Continents
    idTableData.sort( function( a, b ) {
        return a.continent < b.continent ? -1 : a.continent > b.continent ? 1 : 0;
    });

    return (
        <div className={style.general}>
        <div className={style.container}>
            <div className={style.title}>
                <h2>COVID-19 Statictics from all over the World</h2>
                <Link to="/details"><h5>Click to see further details</h5></Link>
            </div>
            
            <div style={{height:650,margin: 50}}>
                <DataGrid className={style.grid}                               
                    rows={idTableData}
                    columns={columns}
                    rowsPerPageOptions={[10]}
                    pageSize={10}
                    autoPageSize={true}
                    onRowClick={(row) => console.log(row)}
                />
            </div>
        </div>        
        </div>
    )
}