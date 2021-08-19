import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';

// components
import FormComponents from 'components/Form';
import ArtistDisplay from 'components/ArtistDisplay';

// utils
import artistList from 'utils/mockArtistList';

const AddArtist = ({ selectedArtists, setSelectedArtists }) => {
  const classes = useStyles();
  const [group, setGroup] = useState('');
  const [member, setMember] = useState('');

  const selectedGroup =
    artistList?.length > 0 && artistList.find((item) => item?.name === group);
  const memberOptions = selectedGroup?.options || [
    { value: '', name: 'Please Select Group!' },
  ];

  const addArtist = () => {
    if (group === '' || member === '') {
      return;
    }
    const newElement = {
      group: group,
      member: member,
      key: Math.floor(Math.random() * 100),
    };
    const temp = [...selectedArtists, newElement];
    setSelectedArtists(temp);
    setGroup('');
    setMember('');
  };

  return (
    <div className={classes.parent}>
      <div className={classes.artistSelect}>
        <FormComponents.ArtistSelect
          name="group"
          options={artistList}
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
        <FormComponents.ArtistSelect
          name="member"
          options={memberOptions}
          value={member}
          onChange={(e) => setMember(e.target.value)}
        />
        <Button
          className={classes.addButton}
          variant="contained"
          color="primary"
          size="small"
          onClick={addArtist}
        >
          추가
        </Button>
      </div>

      <div>
        <ArtistDisplay
          selectedArtists={selectedArtists}
          setSelectedArtists={setSelectedArtists}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  parent: {
    display: 'flex',
    flexDirection: 'column',
  },
  artistSelect: {
    display: 'flex',
    flexDirection: 'row',
  },
  addButton: {
    marginTop: 15,
    marginLeft: 10,
    height: 35,
    width: 75,
  },
}));

export default AddArtist;
