import { Paper } from "@mui/material";
import parse from "html-react-parser";


const TCFview = ({values}) => {
  
  return (
    <div>
        <style>{`
    table, tr, td {
     border:1px solid black;
    }
  `}</style>

  <Paper elevation= {2} style= {{
    padding: "10px"
  }}>
      <table width="100%">
<thead>
  <tr>
    <th colSpan="2">{values.title}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td width="5%">1</td>
    <td>Model <br />
        {values.models}
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>Hazard Description <br />
        {parse(values.hazardDescript  || '' )}
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td> <strong> Risk Reduction</strong> <br />
    {parse(values.riskReduct || '')}

    </td>
  </tr>
  <tr>
    <td>4</td>
    <td> <strong> Compliance Statement</strong> <br />
      {values.complyStatements}

    </td>
  </tr>
</tbody>
</table>
  </Paper>

    </div>
  );
};

export default TCFview;
