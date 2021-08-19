import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const ArtistDisplay = ({ selectedArtists, setSelectedArtists }) => {
  const classes = useStyles();

  const handleDelete = (itemToDelete) => {
    setSelectedArtists((items) =>
      items.filter((item) => item.key !== itemToDelete.key)
    );
  };

  return (
    <>
      {selectedArtists?.map((item, index) => {
        return (
          <div className={classes.root} key={index}>
            <div className={classes.div2}>
              <CancelRoundedIcon
                className={classes.cancelButton}
                onClick={() => handleDelete(item)}
              />
              <Typography
                className={classes.label}
                variant="body2"
                gutterBottom
              >
                {`${item.group} => ${item.member}`}
              </Typography>
            </div>
          </div>
        );
      })}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  div2: {
    display: 'inline-flex',
    boxSizing: 'border-box',
    borderRadius: '16px',
  },
  label: {
    padding: 10,
    margin: 0,
  },
  cancelButton: {
    cursor: 'pointer',
    margin: '7px 5px 0 -5px',
    color: 'rgba(0, 0, 0, 0.26)',
  },
}));

export default ArtistDisplay;
