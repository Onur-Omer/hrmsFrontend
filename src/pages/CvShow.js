  
import React, { useState ,useEffect} from "react";
//import IndexCv from "../utilities/cvPdf/IndexCv";
import { useParams } from "react-router";
import { Tab, Menu } from "semantic-ui-react";
import Experiances from "../layouts/Experiances";
import Schools from "../layouts/Schools"
import ForeignLanguages from "../layouts/ForeignLanguages"
import Languages from "../layouts/Languages"
import User from "../layouts/User"
import CvService from "../services/CvService";

const panes = [
  {
    menuItem: { key: "users", icon: "users", content: "Users" },
    render: () => <Tab.Pane><User/></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key="Experiances">
        {" "}
        Experiances
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <Experiances />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="Schools">
        {" "}
        Schools
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <Schools/>
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="Foreign Languages">
        {" "}
        Foreign Languages
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <ForeignLanguages/>
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="Languages">
        {" "}
        Languages
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <Languages/>
      </Tab.Pane>
    ),
  },
  
];
export default function CvShow() {

  let { id } = useParams();
  const [cv, setCv] = useState({});

  useEffect(()=>{
    let cvService = new CvService();
    cvService.getByEmployeeCvId(id).then(result=>setCv(result.data.data))
  },[])

  console.log(cv)

  localStorage.setItem("cv",JSON.stringify(cv))
  return (
    <div>
      {/* <IndexCv></IndexCv> */}
      <Tab panes={panes} />
    </div>
  );
}
