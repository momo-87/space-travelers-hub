import { useSelector } from 'react-redux';
import { selectMission } from 'features/missions/missionsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Table } from 'react-bootstrap';

const MissionShelf = () => {
  const { missions, isLoading, error } = useSelector(selectMission);

  const nomissions = (
    <h3 className="center">No Mission Found</h3>
  );

  if (isLoading) return <h3 className="center">Loading...</h3>;
  if (error) {
    return (
      <h3 className="center">
        Error:
        {' '}
        {error}
      </h3>
    );
  }
  if (missions.length < 1) return <>{nomissions}</>;
  const missionArr = missions.map((mission) => (
    <li key={nanoid()}>
      mission name:
      {mission.missionName}
      <br />
      mission id:
      {mission.missionId}
      <br />
      description:
      {mission.description}
    </li>
  ));
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descripction</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
      </Table>
      <ul>
        {missionArr}
      </ul>
    </>
  );
};

export default MissionShelf;
