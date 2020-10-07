import React from 'react';

// MY components

// MY images
import bananas_and_loquat from "../images/bananas_and_loquat.jpg";
// import logo from "../images/incomplete_logo.png";
import leaves from "../images/leaves_cropped_for_mobile.jpg";
// import leaves from "../images/leaves_edited.jpg";
import turmeric from "../images/turmeric.jpg";
import bananaPapayaHarvest from "../images/banana-papaya-harvest.JPG"

// MUI Imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
 
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


// import tileData from './tileData';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#222',
    },
    gridList: {
        width: '100%',
        height: 'auto',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */



const tileData = [
{
    img: bananaPapayaHarvest,
    title: 'Banana Papaya Harvest',
    author: 'Nigel',
    wide: true,
    tall: true,
},
{
    img: turmeric,
    title: 'turmeric',
    author: 'Nigel',
    wide: false,
    tall: false,
},
{
    img: bananas_and_loquat,
    title: 'Bananas and Loquat',
    author: 'Nigel',
    wide: false,
    tall: false,
},
{
    img: turmeric,
    title: 'turmeric',
    author: 'Nigel',
    wide: false,
    tall: false,
},
{
    img: bananaPapayaHarvest,
    title: 'Banana Papaya Harvest',
    author: 'Nigel',
    wide: false,
    tall: true,
},
{
    img: turmeric,
    title: 'turmeric',
    author: 'Nigel',
    wide: true,
    tall: false,
}];

export default function GardenPhotoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList 
                cellHeight={'240'} 
                spacing={12} 
                className={classes.gridList}
                cols={3}
            >
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.wide ? 2 : 1} rows={tile.tall ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} />
                        {/* <GridListTileBar
                            title={tile.title}
                            titlePosition="bottom"
                            actionPosition="left"
                            className={classes.titleBar}
                        /> */}
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
