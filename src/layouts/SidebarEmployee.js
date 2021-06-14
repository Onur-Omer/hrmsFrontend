import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import CityService from "../services/CityService";
import PositionService from "../services/PositionService";
import EmployerService from "../services/EmployerService";

export default function SidebarEmployee() {
  const [cities, setCities] = useState([]);
  const [positions, setPositions] = useState([]);
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  useEffect(() => {
    let positionService = new PositionService();
    positionService
      .getAllPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAllEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Menu vertical>
        <Menu.Item name="messages">Filtrele</Menu.Item>

        <Dropdown item text="Şehirler">
          <Dropdown.Menu>
            {cities.map((city) => (
              <Dropdown.Item key={city.cityId} text={city.name} />
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="Pozisyonlar">
          <Dropdown.Menu>
            {positions.map((position) => (
              <Dropdown.Item
                key={position.positionId}
                text={position.positionName}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="İş Verenler">
          <Dropdown.Menu>
            {employers.map((employer) => (
              <Dropdown.Item
                key={employer.employerId}
                text={employer.companyName}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Tarihe Göre">
          <Dropdown.Menu>
            <Dropdown.Item text="Son Tarihe Göre" />
            <Dropdown.Item text="İlk Tarihe Göre" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
}
